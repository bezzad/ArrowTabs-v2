$(".arrow-tabs li").hover(
  function() {
    $(this).addClass("ui-state-hover");
  }, function() {
    $(this).removeClass("ui-state-hover");
  }
);

$('.arrow-tabs a').click(function (e) {
  e.preventDefault()
  var selectedTab = $(this).parent();
  var ul = selectedTab.parent();
  ul.find("li").removeClass("ui-tabs-active ui-state-active ui-state-hover").attr("aria-selected", false);
  selectedTab.addClass("ui-tabs-active ui-state-active").attr("aria-selected", true);
  
  // show/hide content
    var content = ul.parent().find(".contents .ui-tabs-panel");
    content.fadeOut(200);  
    ul.parent().find($(this).attr("href")).fadeIn(200);   
})