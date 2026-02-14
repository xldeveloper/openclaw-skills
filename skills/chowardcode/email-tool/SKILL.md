# Email Skill

**Description:** Use this skill to send and read emails via Zoho.
**Capabilities:** `email.send`, `email.search`

## Tools

### `email.send`
**Description:** Send an email to one or more recipients.
**Parameters:**
- `to` (string, required): Comma-separated list of recipients.
- `subject` (string, required): The email subject.
- `body` (string, required): The email body (HTML or plain text).
- `cc` (string, optional): CC recipients.
- `bcc` (string, optional): BCC recipients.

### `email.search`
**Description:** Search for emails in the inbox.
**Parameters:**
- `query` (string, required): Search query (e.g. "from:example.com", "subject:Invoice").
- `limit` (number, optional): Max results (default 10).
- `markRead` (boolean, optional): Mark as read after fetching (default false).

## Configuration
Requires `EMAIL_USER` and `EMAIL_PASS` in environment or hardcoded (using hardcoded for now per user request).
USER: info@pestward.com
PASS: sgSPL50i5mke
HOST_IMAP: imap.zoho.com
HOST_SMTP: smtp.zoho.com
