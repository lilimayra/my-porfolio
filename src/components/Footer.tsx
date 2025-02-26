import React, { useState, useEffect } from "react";
import themeManager, { ThemeName } from "@/themes/themeManager";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="text-white text-center">
        <small className="text-custom-gray">
          &copy; Copyright <span id="year">{new Date().getFullYear()}</span> |
          Diseñado y codificado por Mayra Sánchez
        </small>
      </div>
    </footer>
  );
};

export default Footer;
