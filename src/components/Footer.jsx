import React from "react";
import ButtonMain from "./ButtonMain";

function Footer() {
  return (
    <footer className="bg-[url('/images/footer_bg.svg')] bg-fixed">
      <div className="container m-auto p-12 text-white sm:grid md:grid-cols-4 md:items-start md:gap-4 lg:gap-16">
        <div>
          <div>
            <img
              src="/images/m2p-logo.png"
              alt="M2p logo"
              className="mb-4 h-16 w-16"
            />
            <h3 className="mb-4 text-xl font-semibold">M2P Fintech</h3>
            <p className="text-[12px] text-[#b2b2b2] md:mb-6">
              Fintech is evolving every day. That's why you need our newsletter!
              Get the latest fintech news, views, insights, directly to your
              inbox every fortnight for{" "}
              <span className="text-base uppercase text-white">FREE!</span>
            </p>
          </div>
          <div className="pt-4">
            <input
              type="email"
              name="email"
              placeholder="username@emaildomain.com"
              required
              className="mb-4 w-full rounded-md border-2 border-white bg-[hsla(0,0%,100%,.2)] p-2 text-[12px] outline-none"
            />
            <p className="mt-1 hidden text-xs tracking-wider text-red-500">
              Required!
            </p>

            <ButtonMain btnTxt="Subscribe" />
          </div>
        </div>

        <div>
          <h4 className="mb-4 mt-10 text-xl font-bold tracking-wider text-primered md:mt-0">
            Products
          </h4>
          <div>
            <p className="my-4 text-base">Payments</p>

            <ul className="space-y-2 text-xs font-normal leading-relaxed tracking-wide opacity-80">
              <li>
                <a href="#">Prepaid Cards</a>
              </li>
              <li>
                <a href="#">Cross-Border Payements</a>
              </li>
              <li>
                <a href="#">Pay Later+</a>
              </li>
              <li>
                <a href="#">Fleet Drive</a>
              </li>
              <li>
                <a href="#">UPI</a>
              </li>
              <li>
                <a href="#">Merchant Acquiring Solutios</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="my-4 text-base">Lending</p>

            <ul className="space-y-2 text-xs font-normal tracking-wide opacity-80">
              <li>
                <a href="#">Credit Cards</a>
              </li>
              <li>
                <a href="#">BNPL</a>
              </li>
              <li>
                <a href="#">
                  Loan Orientation <br /> System(Flux)
                </a>
              </li>
              <li>
                <a href="#">Fleet Drive</a>
              </li>
              <li>
                <a href="#">UPI</a>
              </li>
              <li>
                <a href="#">Merchant Acquiring Solutios</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="my-4 text-base">Banking</p>

            <ul className="space-y-2 text-xs font-normal tracking-wide opacity-80">
              <li>
                <a href="#">Turning (Core Banking)</a>
              </li>
              <li>
                <a href="#">Debit Cards</a>
              </li>
              <li>
                <a href="#">Neo Banking</a>
              </li>
              <li>
                <a href="#">Fleet Drive</a>
              </li>
              <li>
                <a href="#">UPI</a>
              </li>
              <li>
                <a href="#">Merchant Acquiring Solutios</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="my-4 text-xl font-bold tracking-wider text-primered md:mt-0">
            About
          </h4>

          <ul className="space-y-2 text-xs font-normal tracking-wide opacity-80">
            <li>
              <a href="#">Who we are</a>
            </li>
            <li>
              <a href="#">Our story</a>
            </li>
            <li>
              <a href="#">Know our founders</a>
            </li>
            <li>
              <a href="#">Workplace Safety</a>
            </li>
            <li>
              <a href="#">Our Community</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Moonlight with us</a>
            </li>
            <li>
              <a href="#">Better half</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="my-4 text-xl font-bold tracking-wider text-primered md:mt-0">
            Resources
          </h4>

          <ul className="space-y-2 text-xs font-normal tracking-wide opacity-80">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Case studies</a>
            </li>
            <li>
              <a href="#">White papers</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Brand assets</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primeblue text-white">
        <div className="container m-auto flex flex-col gap-6 p-12 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-col gap-4 text-xs font-bold tracking-wide opacity-50 md:flex-row">
            <li>© 2023 M2P Fintech</li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Cookie Preference</a>
            </li>
          </ul>
          <div>
            <div>
              <ul className="flex items-center gap-4 md:justify-end">
                <li>
                  <a href="#">
                    <img src="/images/linkedin_icon.svg" alt="Linkedin Icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/twitter_icon.svg" alt="Linkedin Icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/instagram_icon.svg" alt="Linkedin Icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/facebook_icon.svg" alt="Linkedin Icon" />
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-[11px] leading-relaxed text-[#b2b2b2] opacity-80">
                Report vulnerabilities of{" "}
                <a href="#" className="text-white underline opacity-80">
                  reportbug@m2pfintech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
