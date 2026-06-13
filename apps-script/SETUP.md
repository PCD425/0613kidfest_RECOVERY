# Kidova Google Sheets Collector Setup

1. Create a blank Google Sheet named `Kidova KidsFest Responses`.
2. From that Sheet, open **Extensions → Apps Script**.
3. Replace everything in `Code.gs` with the contents of this folder's `Code.gs`.
4. Rename the Apps Script project to `Kidova KidsFest Collector`.
5. Click **Save**.
6. Select the `setup` function beside **Run**, then click **Run** once.
7. Approve the requested Google permissions.
8. Return to the Sheet and confirm these tabs exist:
   - `Anonymous Survey`
   - `Pilot Interest`
   - `Kids Activity Responses`
9. In Apps Script, select **Deploy → New deployment**.
10. Choose **Web app**.
11. Set:
    - Execute as: **Me**
    - Who has access: **Anyone**
12. Click **Deploy**, authorize if requested, and copy the `/exec` Web App URL.

Send the `/exec` URL to Codex so the website can be connected and tested.

## Updating an Existing Deployment

After changing `Code.gs`:

1. Save the script.
2. Run `setup()` again to create any new response tabs.
3. Select **Deploy → Manage deployments**.
4. Edit the existing Web App deployment.
5. Select **New version**, then deploy.

The `/exec` Web App URL stays the same.
