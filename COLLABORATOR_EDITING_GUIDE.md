# Collaborator Editing Guide

## Which Files Matter

### Edit the live website

`index.html`

This is the complete interactive website. It contains:

- Page content
- Styling and colors
- Children's route missions
- Caregiver survey
- Optional pilot-interest form
- Browser-local response storage and CSV export

The website uses one file intentionally, so it can be previewed and published without installing anything.

### Edit printable materials

`print/print-kit.html`

This is the editable source for the poster, caregiver wall, scenario cards, and paper survey.

`print/print-kit.pdf`

This is the current print-ready export. Editing the HTML does not automatically update the PDF.

### Reference documents

`Kidova_KidsFest_Survey_Question_List.docx`

Word version of the full question list.

`SURVEY_GUIDE.md`

Survey purpose, field definitions, event-use guidance, and interpretation notes.

## Preview the Website

Double-click `index.html` to open it in a browser.

After making changes, refresh the browser page and test:

1. Start the children's mission.
2. Complete both missions.
3. Complete every survey question.
4. Submit the anonymous survey.
5. Open the optional pilot form.
6. Verify that CSV export still works.

## Safe Website Edits

In `index.html`, it is generally safe to change:

- Visible headings and paragraphs
- Question wording inside `<label>...</label>`
- Answer wording inside `<option>...</option>`
- Button text
- Colors defined near the top inside `:root`

## Do Not Change Without Testing

Avoid changing or deleting:

- Element IDs such as `home`, `game`, `survey`, `form`, and `pilotForm`
- Field names such as `age`, `current_solution`, and `alert_threshold`
- `onclick`, `onchange`, and `oninput` attributes
- JavaScript functions inside `<script>...</script>`
- Privacy language
- The separation between anonymous survey answers and pilot contact information

Changing field names changes the exported CSV structure.

## Important Data Limitation

The current website is a static event prototype.

- Responses are stored only in the browser that collected them.
- Different phones or computers do not automatically combine responses.
- Clearing browser data can delete locally stored responses.
- Staff must use the CSV export buttons on the event device.

For the event, use one designated survey device and export CSV files regularly.

Do not commit exported survey responses or pilot-contact CSV files to GitHub.

## Publish With GitHub Pages

After pushing the repository:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the `main` branch and `/(root)` folder.
5. Save and wait for the public URL.

The root `index.html` will become the published website.

