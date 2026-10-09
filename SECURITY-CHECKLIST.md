# Security Checklist

## Secrets and keys

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 1 | No API key, token or password in our HTML, CSS or JavaScript | Yes |We checked our HTML, CSS and JavaScript files and found no API keys, passwords, or tokens. |
| 2 | Any third-party key we use is restricted to our domain in that service's dashboard |N/A |We are not currently using any third-party API keys in the website. |
| 3 | Git history is clean: we searched `git log -p` for password, secret, api key and token |Yes |We checked the repository history and found no passwords, secrets, API keys, or tokens. |
| 4 | Any key that was ever committed has been rotated |N/A |No API keys, passwords, or other secret keys have been committed to the repository. |
| 5 | We understand that a key in front-end code is visible through view source, so it is never hidden |Yes |We understand that anything placed in HTML, CSS, or JavaScript can be viewed by visitors. |

## GitHub Actions

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 6 | No secret value is written literally in any workflow YAML file |Yes |We checked the GitHub Actions workflow and found no passwords, API keys, or other secret values written in it. |
| 7 | No workflow step echoes or dumps a secret, and we opened a recent run's log to confirm |Yes |We checked the workflow and its recent run and found no steps that display secret values. |
| 8 | Third-party actions are pinned to a commit SHA, not a moveable tag |N/A |Our project uses the provided GitHub Pages workflow and does not add third-party actions with personal secrets. |
| 9 | Our Pages deploy uses the automatic token, with no personal access token created for it |Yes |GitHub Pages deployment uses GitHub's automatic deployment token instead of a personal access token. |
| 10 | Secret scanning and push protection are enabled on the repository |No |We have not enabled or confirmed secret scanning and push protection on the repository yet. |

## Server, database and access

Expect these to be N/A for a static site. Say so, and say why.

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 11 | The site has no server or database of its own |N/A | The project is a static website hosted on GitHub Pages and does not have its own server or database. |
| 12 | If there is any backend: it has an access layer and its credentials are environment variables |N/A |The website does not currently have a backend. |
| 13 | If there is any stored data: it is invented, not real people's data |N/A |The website does not currently store user data. |

## Content and privacy

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 14 | No student number, personal email, phone number or home address on any page or in the repository |Yes |We checked the website and repository and did not include student numbers, personal emails, phone numbers, or home addresses. |
| 15 | Every group member agreed to whatever is published about them |Yes |The group agreed on the information and content that will be published in the project. |
| 16 | Contact is through a form or a professional email we are happy to publish |N/A |The website does not currently include a contact form or public contact email. |
| 17 | Any text a visitor can type is escaped before it is put back on the page |N/A |The website does not currently display user-entered text back on the page. |
| 18 | Images, fonts and audio are ours, licensed, or credited |Yes |We will use images and other media that are allowed for the project or provide credit where required. |
| 19 | External links go where they say they go |N/A |The website does not currently contain external links that require this check. |
| 20 | Repository visibility is deliberate, and we checked it after our last push |Yes |The repository is intentionally public because the final project requires a public GitHub repository, and we checked its visibility. |

## Anything we found and fixed

The checklist helped us review what information and files are being published in our public repository. We did not find any passwords, API keys, or other secret information. We also checked that the project is a static website and does not currently use a backend or database.
