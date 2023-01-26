import React from "react";
import PageWrapper from "../components/PageWrapper";
import { useState, useEffect, useCallback } from "react";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const [newContact, setNewContact] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
    prenom: "",
    email: "",
    telephone: "",
    nom_entreprise: "",
    service: "",
    nb_demployes: "",
    localisation: "",
    dans: "",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const envoyer = async () => {
    ///Fonction création de pdf à partir des résultats du formulaire
  };

  const handleSumitForm = useCallback((e) => {
    envoyer();
  });

  return (
    <>
      <PageWrapper>
        <div className="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center mt-14">
              <div className="col-12">
                <h1 className="font-size-9 text-center mb-11">
                  Contactez nous !
                </h1>
                <div className="d-xxl-flex d-lg-inline-flex flex-xxl-row flex-lg-column col-12">
                  <div className="col-xxl-8 col-lg-12 col-sm-12 bg-white px-9 pt-9 pb-7 shadow-8 rounded-4 mb-10">
                    <form
                      name="contact"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSumitForm}
                    >
                      {/* You still need to add the hidden input with the form name to your JSX form */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="row">
                        <div className="col-xxl-6 col-sm-12 mb-7">
                          <label
                            htmlFor="prenom"
                            className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                          >
                            Votre prénom
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Jhon"
                            id="prenom"
                            name="prenom"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-xxl-6 col-sm-12 mb-7">
                          <label
                            htmlFor="nom"
                            className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                          >
                            Votre nom
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Doe"
                            id="nom"
                            name="nom"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-xxl-6 col-sm-12 mb-7">
                          <label
                            htmlFor="telephone"
                            className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                          >
                            Numéro de téléphone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="00.00.00.00.00"
                            id="telephone"
                            name="telephone"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-xxl-6 col-sm-12 mb-7">
                          <label
                            htmlFor="email"
                            className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                          >
                            E-mail
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="example@gmail.com"
                            id="email"
                            name="email"
                            required
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-lg-12 pt-4">
                          <button
                            type="submit"
                            className="btn btn-primary text-uppercase w-100 h-px-48"
                          >
                            Récuperer ma data sous forme de pdf
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
