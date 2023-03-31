const Student = require("../models/studentModel")

const getAllStudent = async(req,res) => {
    try {
        const allStudents = await Student.findAll()
        res.send(allStudents)
    } catch (error) {
        console.log(error);
    }
}


const addStudent = async(req,res) => {
    try {
        const add = await Student.create(req.body, {
            raw: true
        })
        res.json(add)
    } catch (error) {
        console.log(error);
    }
}


const emailSender = async (req, res) => {

    const output = `
      Name: ${req.body.fullname}
      Qualification: ${req.body.qualification}
      Phone: ${req.body.mobile}
    `;
    
    
    try {
        
    var nodemailer = require('nodemailer');
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'parvez.proses@gmail.com',
        pass: 'dbzpqzoozgskibel'
      }
    });
    
    var mailOptions = {
      from: 'parvez.proses@gmail.com',
      to: `${req.body.email}`,
      subject: 'Sending Email using Node.js',
      text: output
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent');
      }
    });
    res.send("Email Sent")
    } catch (error) {
        console.log(error);
    }
    };

    

module.exports = {
    addStudent,
    getAllStudent,
    emailSender
}