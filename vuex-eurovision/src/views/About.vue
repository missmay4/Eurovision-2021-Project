<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="card border-dark mb-3">
      <div class="row g-0">
        <div class="col-sm-12 col-md-4">
          <img src="../assets/About/me.jpeg" class="img-fluid" alt="..." />
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="card-body" style="padding-bottom: 0 !important">
            <h3 class="card-title mt-4">Hello there!</h3>
            <p class="card-text text-justify">
              My name is Mayte,
              <span class="badge bg-info text-dark"
                >I'm a Junior Front-End Developer</span
              >
              from Spain
              <img src="../assets/EuroFlags/EuroES.png" alt="" class="flag" />
            </p>
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div
                  class="alert alert-info"
                  style="margin-bottom: 0 !important"
                  role="alert"
                >
                  <p class="card-text text-justify mr-3">
                    <b>Why Eurovision?</b>
                    Eurovision is one of my passions, and every year since I can
                    remember I watch this show.
                  </p>
                  <p class="card-text text-justify mr-3">
                    Over time, I became more interested on the contest and
                    because of this, I decided to designed a web app to 'vote'
                    with my friends while we watch the entire show.
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div
                  class="alert alert-secondary"
                  role="alert"
                  style="padding-bottom: 0 !important"
                >
                  <p
                    class="card-text text-justify mr-3"
                    style="margin-bottom: 0 !important"
                  >
                    Previous versions of this project
                  </p>
                  <div class="row mb-2">
                    <div class="col">
                      <a
                        href="https://github.com/missmay4/Eurovision-2019-Project"
                        ><small>2019 Project (Code)</small></a
                      >
                    </div>
                    <div class="col">
                      <a href="https://vote-eurovision2020.herokuapp.com/"
                        ><small>2020 Project (App)</small></a
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <img
                      src="https://media.giphy.com/media/5zw8W9DgXn2UkN8JRf/giphy.gif"
                      class="img-fluid mb-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flag {
  max-width: 28px;
  max-height: 28px;
}
</style>