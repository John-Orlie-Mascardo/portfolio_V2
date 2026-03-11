// Certificate data for the portfolio
import ciscoPacketTracerImg from "../assets/Certificates/Getting started cisco packet tracer.pdf.png";
import htmlCssImg from "../assets/Certificates/HTML and CSS - expiration_ 2_4_2031.pdf.png";
import introIoTImg from "../assets/Certificates/Introduction to IoT.pdf.png";
import powerpointImg from "../assets/Certificates/PowerPoint 2019 Associate.pdf.png";
import wordImg from "../assets/Certificates/Word 2019 Associate.pdf.png";

export const webDevCerts = [
  {
    id: 2,
    title: "HTML and CSS",
    issuer: "Microsoft",
    date: "2026",
    image: htmlCssImg
  }
];

export const otherCerts = [
  {
    id: 1,
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco",
    date: "2026",
    image: ciscoPacketTracerImg
  },
  {
    id: 3,
    title: "Introduction to IoT",
    issuer: "Cisco",
    date: "2026",
    image: introIoTImg
  },
  {
    id: 4,
    title: "PowerPoint 2019 Associate",
    issuer: "Microsoft",
    date: "2024",
    image: powerpointImg
  },
  {
    id: 5,
    title: "Word 2019 Associate",
    issuer: "Microsoft",
    date: "2024",
    image: wordImg
  }
];
