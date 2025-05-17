# QR Code Generator

A lightweight web application for generating QR codes from text or URLs, hosted at 


[![Visit Live Site](https://img.shields.io/badge/Visit-Live%20Site-brightgreen?style=for-the-badge)](https://arjunlakhanpall.github.io/qr-code-generator/)


## Features
- Generate QR codes instantly by entering text or URLs.
- Simple and intuitive user interface.
- Responsive design for use on desktop and mobile devices.
- Built with minimal dependencies for fast loading.

## Technologies Used
- **HTML5**: For the application structure.
- **CSS3**: For styling and responsive layout.
- **JavaScript**: For QR code generation logic.
- **qrcode.js**: JavaScript library for QR code creation ([davidshimjs/qrcodejs](https://github.com/davidshimjs/qrcodejs)).
- **GitHub Pages**: For hosting the application.

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Installation
To run the project locally:
1. Clone the repository (if available) or download the source code:
   ```bash
   git clone https://github.com/arjunlakhanpall/qr-code-generator.git
   ```
   *Note*: If the repository is not public, download the site files using browser developer tools or contact the author.
2. Navigate to the project directory:
   ```bash
   cd qr-code-generator
   ```
3. Open `index.html` in a browser:
   - Preferably, use a local server to avoid CORS issues:
     ```bash
     npx http-server
     ```
     Then visit `http://localhost:8080`.
   - Or open `index.html` directly (some features may be limited).

### Usage
1. Visit [https://arjunlakhanpall.github.io/qr-code-generator/](https://arjunlakhanpall.github.io/qr-code-generator/) or run locally.
2. Enter a URL or text in the input field.
3. Click the "Generate" button to create the QR code.
4. Scan the QR code with a QR code reader or download it (if the feature is available).

## Live Site
Try the QR Code Generator now by clicking the button below:

<button onclick="window.location.href='https://arjunlakhanpall.github.io/qr-code-generator/'">Visit Live Site</button>

*Note*: The button above is for demonstration in this README. To add it to your project’s webpage, include the following HTML in your `index.html`:

```html
<button onclick="window.location.href='https://arjunlakhanpall.github.io/qr-code-generator/'">Visit Live Site</button>
```

Optionally, style it in `css/style.css`, for example:

```css
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
```

## Project Structure
```
qr-code-generator/
├── index.html        # Main HTML file
├── css/
│   └── style.css     # Styles for the application
├── js/
│   └── script.js     # JavaScript for QR code generation
├── lib/
│   └── qrcode.min.js # QR code generation library
└── README.md         # Project documentation
```

## Customization
- **Styling**: Edit `css/style.css` to modify the appearance.
- **QR Code Settings**: Adjust QR code parameters in `js/script.js`, such as size or error correction level. Example:
  ```javascript
  new QRCode(document.getElementById("qrcode"), {
    text: "https://example.com",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });
  ```

## Contributing
1. Fork the repository (if accessible).
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Submit a Pull Request.

## License
This project is licensed under the MIT License (assumed, as no license is specified). See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [qrcode.js](https://github.com/davidshimjs/qrcodejs) for QR code generation.
- GitHub Pages for free hosting.

## Contact
For inquiries, contact [Arjun Lakhanpal](https://github.com/arjunlakhanpall).
