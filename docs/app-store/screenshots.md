# Screenshot Capture Notes

Target set for first iOS release:

- iPhone portrait: 1320 x 2868
- iPad 13-inch portrait: 2064 x 2752

Playwright config files:

- `scripts/playwright.appstore.iphone.json`
- `scripts/playwright.appstore.ipad.json`

Suggested capture targets: drive the live app through the relevant flows
(home → quiz → result, auth screen) on a web build and capture each.

Recommended output folder:

- `output/playwright/app-store/`

Current generated screenshots:

- `output/playwright/app-store/iphone-quiz-release.png`
- `output/playwright/app-store/ipad-quiz-release.png`

Example verification after capture:

- `sips -g pixelWidth -g pixelHeight output/playwright/app-store/<file>.png`
