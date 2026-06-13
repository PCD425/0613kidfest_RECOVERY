const SURVEY_SHEET = 'Anonymous Survey';
const PILOT_SHEET = 'Pilot Interest';
const KIDS_SHEET = 'Kids Activity Responses';

const SURVEY_FIELDS = [
  'submission_id',
  'timestamp',
  'age',
  'independence',
  'incident_frequency',
  'last_incident',
  'current_solution',
  'current_solution_score',
  'relative_value',
  'top_value',
  'dealbreaker',
  'alert_threshold',
  'learning_signal',
  'commitment',
  'payer',
  'price',
  'trust'
];

const PILOT_FIELDS = [
  'submission_id',
  'timestamp',
  'email',
  'pilot_type'
];

const KIDS_FIELDS = [
  'submission_id',
  'timestamp',
  'selected_choice',
  'first_choice_safe',
  'completed'
];

function setup() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error('Open this Apps Script project from the response Google Sheet.');
  }

  ensureSheet_(spreadsheet, SURVEY_SHEET, SURVEY_FIELDS);
  ensureSheet_(spreadsheet, PILOT_SHEET, PILOT_FIELDS);
  ensureSheet_(spreadsheet, KIDS_SHEET, KIDS_FIELDS);
}

function doGet() {
  return jsonResponse_({
    ok: true,
    service: 'Kidova KidsFest response collector'
  });
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const type = payload.type;
    const data = payload.data || {};
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    if (!spreadsheet) {
      throw new Error('Response spreadsheet is unavailable.');
    }

    if (type === 'survey') {
      appendUnique_(spreadsheet, SURVEY_SHEET, SURVEY_FIELDS, data);
    } else if (type === 'pilot') {
      appendUnique_(spreadsheet, PILOT_SHEET, PILOT_FIELDS, data);
    } else if (type === 'kids_activity') {
      appendUnique_(spreadsheet, KIDS_SHEET, KIDS_FIELDS, data);
    } else {
      throw new Error('Unknown submission type.');
    }

    return jsonResponse_({ ok: true, submission_id: data.submission_id });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error.message || error) });
  }
}

function ensureSheet_(spreadsheet, name, fields) {
  const sheet = spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(fields);
    sheet.setFrozenRows(1);
  }
}

function appendUnique_(spreadsheet, sheetName, fields, data) {
  const sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    throw new Error('Run setup() before accepting submissions.');
  }

  const submissionId = String(data.submission_id || '');
  if (!submissionId) {
    throw new Error('Missing submission_id.');
  }

  if (sheet.getLastRow() > 1) {
    const existingIds = sheet
      .getRange(2, 1, sheet.getLastRow() - 1, 1)
      .getDisplayValues()
      .flat();
    if (existingIds.includes(submissionId)) return;
  }

  sheet.appendRow(fields.map(field => sanitizeCell_(data[field])));
}

function parsePayload_(e) {
  if (e && e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }
  if (e && e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }
  throw new Error('Missing request payload.');
}

function sanitizeCell_(value) {
  if (value === undefined || value === null) return '';
  const text = String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
