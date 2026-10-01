import React from "react";
import easypagelogo from "../assets/easypage.png";
import whatsapp from "../assets/whatsapp.png";
import linkdin from "../assets/linkedin.png";
import github from "../assets/github.icon.png";
import { FileText, BookOpen, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#05070d] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>


      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

       
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-3 lg:gap-20">


          {/* ================= BRAND ================= */}
          <div>

            {/* Logo */}
            <div className="mb-5 flex items-center gap-3">

              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-lg" />

                <img
                  src={easypagelogo}
                  alt="Easy Page logo"
                  className="relative h-11 w-11 rounded-xl object-cover ring-1 ring-white/10"
                />
              </div>

              <div>
                <h3 className="text-xl font-extrabold uppercase tracking-tight">
                  Easy{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Page
                  </span>
                </h3>

                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                  Create • Customize • Download
                </p>
              </div>

            </div>


            {/* Description */}
            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Crafting the first impression of your assignments.
            </p>


            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs text-gray-400 backdrop-blur-sm">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              Free to use

            </div>

          </div>



          {/* ================= FEATURES ================= */}
          <div>

            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Features
            </h4>


            <ul className="space-y-4">

              {/* PDF Generation */}
              <li className="group flex items-center gap-3 text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-white">

                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10 transition-all duration-200 group-hover:border-blue-400/30 group-hover:bg-blue-500/20">

                  <FileText className="h-4 w-4 text-blue-400" />

                </span>

                <span>
                  PDF Generation
                </span>

              </li>


              {/* Academic Focused */}
              <li className="group flex items-center gap-3 text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-white">

                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/10 bg-indigo-500/10 transition-all duration-200 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/20">

                  <BookOpen className="h-4 w-4 text-indigo-400" />

                </span>

                <span>
                  Academic Focused
                </span>

              </li>


              {/* Easy To Use */}
              <li className="group flex items-center gap-3 text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-white">

                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-400/10 bg-yellow-500/10 transition-all duration-200 group-hover:border-yellow-400/30 group-hover:bg-yellow-500/20">

                  <User className="h-4 w-4 text-yellow-400" />

                </span>

                <span>
                  Easy to Use
                </span>

              </li>

            </ul>

          </div>



          {/* ================= CONNECT WITH ME ================= */}
          <div>

            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Connect With Me
            </h4>


            <div className="space-y-3">


              {/* WhatsApp */}
              <a
                href="https://wa.me/+919696419984"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5 text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-400/20 hover:bg-green-500/[0.06] hover:text-white"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04]">

                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="h-8 w-8 rounded-lg object-contain"
                  />

                </div>

                <div className="flex flex-col">

                  <span className="text-sm font-medium">
                    WhatsApp
                  </span>

                  <span className="text-xs text-gray-600 group-hover:text-gray-500">
                    Let's connect
                  </span>

                </div>

              </a>



              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mohammad-zaid20"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5 text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/20 hover:bg-blue-500/[0.06] hover:text-white"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04]">

                  <img
                    src={linkdin}
                    alt="LinkedIn"
                    className="h-8 w-8 rounded-lg object-contain"
                  />

                </div>

                <div className="flex flex-col">

                  <span className="text-sm font-medium">
                    LinkedIn
                  </span>

                  <span className="text-xs text-gray-600 group-hover:text-gray-500">
                    Professional profile
                  </span>

                </div>

              </a>



              {/* GitHub */}
              <a
                href="https://github.com/zaidxGithub"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5 text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-400/20 hover:bg-purple-500/[0.06] hover:text-white"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04]">

                  <img
                    src={github}
                    alt="GitHub"
                    className="h-8 w-8 rounded-lg object-contain"
                  />

                </div>

                <div className="flex flex-col">

                  <span className="text-sm font-medium">
                    GitHub
                  </span>

                  <span className="text-xs text-gray-600 group-hover:text-gray-500">
                    View my projects
                  </span>

                </div>

              </a>

            </div>

          </div>

        </div>



        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-white/[0.07]">

          <div className="flex flex-col gap-3 py-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-gray-400">
                Mohammad Zaid
              </span>{" "}
              | Designed & Developed with care. All rights reserved.
            </p>


            <div className="flex items-center gap-2">

              <span className="h-1 w-1 rounded-full bg-gray-700" />

              <span>
                Easy Page
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-700" />

              <span>
                Built for students
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

