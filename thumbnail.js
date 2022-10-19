document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
  let targetImage = document.querySelector("#smart-image");
  targetImage.addEventListener("click", function() {
    if (targetImage.classList.contains("small")) {
        targetImage.classList.remove("small");
    } else {
        targetImage.classList.add("small");
    }
  });
});
<!--由于对象映射，所以调用test对象等于调用Android映射的对象-->
function getlocation(){
    ttJSCore.invoke("getLocation", "", 1);
}
