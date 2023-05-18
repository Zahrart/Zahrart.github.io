const galleryParent = document.getElementById("galleryParent")
const photoElement = `
  <div class="col-lg-4 col-md-6 portfolio-item filter-art">
        <div class="portfolio-wrap">
          <img src="ARTLOCATION" class="img-fluid" alt="">
          <div class="portfolio-info">
            <div class="portfolio-links">
              <a target="_blank" href="ARTLOCATION" data-gallery="portfolioGallery" class="portfolio-lightbox" title=""><i class="bx bx-plus"></i></a>
            </div>
         </div>
      </div>
  </div>
`

window.onload = function images() {
  var dir = "./assets/img/portfolio/";
  var fileextension = ".jpg";
  $.ajax({
    url: dir,
    success: function (data) {
      $(data).find(`a:contains(${fileextension})`).each(function () {
        var filename = this.href.replace(window.location.host, "").replace("http://", "");
        galleryParent.innerHTML += photoElement.replace(/ARTLOCATION/g, `.${filename}`);
      });
    }
  });
}