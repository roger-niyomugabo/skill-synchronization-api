import nodemailer from 'nodemailer';
import config from '../config';
import { EmailInfo } from '../interfaces';
import { emailVerificationTemplate } from './emailTemplates';

const mailer = async (info: EmailInfo, action: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.NODEMAILER.API_SENDER_EMAIL,
            pass: config.NODEMAILER.EMAIL_PASSWORD,
        },
    });

    let subject: string;
    let emailto: string[];
    let data: string;
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action) {
        case 'emailVerificationRequest':
            subject = 'Email verification';
            data = emailVerificationTemplate(info);
            emailto = info.email;
            break;

        default:
            subject = '';
            break;
    }
    const mailOptions = {
        from: 'Skill Synchronization ',
        to: emailto.join(', '),
        subject,
        html: data,
    };
    try {
        return transporter.sendMail(mailOptions);
    } catch (error) {
        return error;
    }
};
export default mailer;
