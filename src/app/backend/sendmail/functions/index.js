const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');

admin.initializeApp()


//google account credentials used to send email
var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'mathsoclibrary@gmail.com',
        pass: 'piisirrational'
    }
});


exports.sendEmail = functions.firestore
    .document('requests/{bookId}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `mathsoclibrary@gmail.com`,
            to: 'billcui0227@gmail.com',
            subject: 'A new textbook has been requested!',
            html: `<h1>${snap.data().title} by ${snap.data().author}${snap.data().edition? `, ${snap.data().edition} edition` : ``} </h1>`
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });