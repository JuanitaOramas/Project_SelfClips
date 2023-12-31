import "./css/Loginpage.css"
import React from "react";
import myImage from "./logoSelfClips.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
   
          <div>
                <section class="h-100 login-form" >
                  <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                      <div class="col-xl-10">
                        <div class="card rounded-3 text-black">
                          <div class="row g-0">
                            <div class="col-lg-6">
                              <div class="card-body p-md-5 mx-md-4">
                                <img src={myImage} alt="logo" className="centered-image" style={{ width: "90%" }} />
                              <div class="text-center">

                                  <h4 class="mt-1 mb-5 pb-1">Welcome to Selfclips</h4>
                                </div>

                                <form>
                                  <p className ="paragraph">Please login to your account</p>

                                  <div class="form-outline mb-4">
                                  <label class="form-label" for="form2Example11">Username</label>
                                    <input type="email" id="form2Example11" class="form-control"
                                      placeholder="Phone number or email address" />
                                    
                                  </div>

                                  <div class="form-outline mb-4">
                                    <label class="form-label" for="form2Example22">Password</label>
                                    <input type="password" id="form2Example22" class="form-control" />
                                    
                                  </div>

                                  <div class="text-center pt-1 mb-5 pb-1">
                                    <Link to="/"><button type="button" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 btn-login" >Log in</button></Link>
                                   
                                    <a class="text-muted" href="#!">Forgot password?</a>
                                  </div>

                                  <div class="d-flex align-items-center justify-content-center pb-4">
                                    <p class="mb-0 me-2">Don't have an account?</p>
                                    <Link to="/register"><button type="button" class="btn btn-outline-danger">Create new</button></Link>
                                  </div>

                                </form>

                              </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                              <div class="text-white px-3 py-4 p-md-5 mx-md-4">

                                <h4 class="mb-4">We are more than just a company</h4>
                                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

       
  );
}

export default LoginPage;