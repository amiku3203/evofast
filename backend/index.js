const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

 app.use(cors({
    origin: 'https://fairfoxeonnoida.online',
     
     
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure the transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'landsworthrealty2020@gmail.com',
      pass: 'uuau vnse bzxc toti', // This should be stored securely
    }
});

const sendMailAsync = (mailOptions) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};

app.post("/submit", async (req, res) => {
    const { name, email, mobile } = req.body;
    console.log("req.body", req.body);

    const subject = 'Client Submission';
    const text = `Thank you for your submission!\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}`;

    const mailOptions = {
        from: 'landsworthrealty2020@gmail.com',
        to: ['landsworthrealty2020@gmail.com', email],
        subject: subject,
        text: text,
    };

    try {
        const info = await sendMailAsync(mailOptions);
        console.log("Email sent: ", info.response);

        // Respond with success status
        res.status(200).send("Email sent successfully");

        // Optionally, you can handle file download logic here if required
        // res.download(path.join(__dirname, 'files', 'Fairfox Eon Retail WA.pdf'), 'brochure.pdf');

    } catch (error) {
        console.log("Error sending email: ", error);
        res.status(500).send("Error sending email");
    }
});
app.post("/submit1", async (req, res) => {
    const { name, email, mobile } = req.body;
    console.log("req.body", req.body);

    const subject = 'Client Submission';
    const text = `Thank you for your submission!\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}`;

    const mailOptions = {
        from: 'landsworthrealty2020@gmail.com',
         to: ['landsworthrealty2020@gmail.com', email],
        subject: subject,
        text: text,
    };

    try {
        const info = await sendMailAsync(mailOptions);
        console.log("Email sent: ", info.response);

        // Respond with success status
        res.status(200).send("Email sent successfully");

        // Optionally, you can handle file download logic here if required
        // res.download(path.join(__dirname, 'files', 'Fairfox Eon Retail WA.pdf'), 'brochure.pdf');

    } catch (error) {
        console.log("Error sending email: ", error);
        res.status(500).send("Error sending email");
    }
});
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server running on port ${port}`);
});
