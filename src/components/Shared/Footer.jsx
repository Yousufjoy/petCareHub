import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className=" md:mt-[100px] mt-[50px]"> 
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <Image
            className="rounded-md"
            src="/assets/logo.jpg"
            height={80}
            width={80}
            alt="logo not found"
          ></Image>
          <p>
            petCareHub Industries Ltd.
            <br />
            Providing reliable pet products since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Cat items</a>
          <a className="link link-hover">Dog items</a>
          <a className="link link-hover">Bird items</a>
          <a className="link link-hover">Online Payment</a>
        </nav>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Caring</a>
          <a className="link link-hover">Diverse</a>
          <a className="link link-hover">Vibrant</a>
          <a className="link link-hover">Friendly</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
