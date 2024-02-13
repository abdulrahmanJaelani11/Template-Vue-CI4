<template>
  <div
    class="page-wrapper"
    id="main-wrapper"
    data-layout="vertical"
    data-navbarbg="skin6"
    data-sidebartype="full"
    data-sidebar-position="fixed"
    data-header-position="fixed"
  >
    <div
      class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center"
    >
      <div class="d-flex align-items-center justify-content-center w-100">
        <div class="row justify-content-center w-100">
          <div class="col-md-8 col-lg-6 col-xxl-4">
            <div class="card mb-0">
              <div class="card-body">
                <a class="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img
                    src="../../public/assets/images/logos/dark-logo.svg"
                    width="180"
                    alt=""
                  />
                </a>
                <p class="text-center">Your Social Campaigns</p>
                <form @submit.prevent="Login()">
                  <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      aria-describedby="emailHelp"
                      v-model="user.username"
                    />
                  </div>
                  <div class="mb-4">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      v-model="user.password"
                    />
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between mb-4"
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input primary"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexCheckChecked"
                      >
                        Remeber this Device
                      </label>
                    </div>
                    <a class="text-primary fw-bold" href="./index.html"
                      >Forgot Password ?</a
                    >
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                  >
                    Sign In
                  </button>
                  <div class="d-flex align-items-center justify-content-center">
                    <p class="fs-4 mb-0 fw-bold">New to Modernize?</p>
                    <a
                      class="text-primary fw-bold ms-2"
                      href="./authentication-register.html"
                      >Create an account</a
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async Login() {
      try {
        console.log(this.user);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
