/*
Name: Palaash Gajjar
File: script.js
Date: 04/10/2026
Lab 4 Part 2 Image Gallery Challenge
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
    {filename: "pic1.jpg", alt: "Human eye"},
    {filename: "pic2.jpg", alt: "Sandstone rock formation"},
    {filename: "pic3.jpg", alt: "Purple and white flowers"},
    {filename: "pic4.jpg", alt: "Egyptian Tomb painting"},
    {filename: "pic5.jpg", alt: "Moth on leaf"},
];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/"

for (const image of images) {
    const newImage = document.createElement("img");
    newImage.src = `${baseURL}${image.filename}`;
    newImage.alt = image.alt;
    newImage.tabIndex = "0";
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", updateDisplayedImage);
    newImage.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
        updateDisplayedImage(e);
        }
    });
}

