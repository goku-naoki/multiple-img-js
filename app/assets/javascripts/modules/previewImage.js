$(function () {
  function buildImage(url) {
    const imageEl = `
      <img src="${url}" class="img-box__element">
      `;
    return imageEl;
  }

  function buildInput() {
    const inputEl = `
     <input class="form__file-input"  type="file" name="hoge">
    `;
    return inputEl;
  }

  // $("#trigger").on("click", function (e) {
  //   if ($(".img-box__element").length < 3) {
  //     $(".form__file-input:last").trigger("click");
  //   } else {
  //     alert("３枚以上選択できません");
  //   }
  // });

  $("").on("", "", function (e) {
    alert("Good job!!!");
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    const imageElement = buildImage(url);
    const target = $(".img-box");
    target.append(imageElement);

    if ($(".form__file-input").length < 3) {
      $(".form").append(buildInput());
    }
  });
});
