// Generated by CoffeeScript 1.4.0
(function() {

  $(function() {
    var gui, win;
    try {
      gui = require('nw.gui');
      win = gui.Window.get();
      win.show();
      win.showDevTools();
      $('#close').click(function() {
        return win.close();
      });
      $('#minimize').click(function() {
        return win.minimize();
      });
      $('#maximize').click(function() {
        return win.maximize();
      });
      $('#panel').mouseenter(function() {
        return $('#panel').addClass('drag');
      });
      $('#panel').mouseleave(function() {
        return $('#panel').removeClass('drag');
      });
    } catch (e) {
      console.log("We're not running under node-webkit.");
    }
    $("#content header .edit").click(function() {
      if ($(this).text() === "save") {
        $(this).text("edit");
        return window.noted.editor.preview();
      } else {
        $(this).text("save");
        return window.noted.editor.edit();
      }
    });
    window.noted.editor = new EpicEditor({
      container: 'contentbody',
      theme: {
        base: '/themes/base/epiceditor.css',
        preview: '/themes/preview/style.css',
        editor: '/themes/editor/style.css'
      }
    });
    window.noted.editor.load();
    window.noted.editor.importFile('appnotes/Welcome.mdown', "Loading content...");
    return window.noted.editor.preview();
  });

  window.noted = {};

}).call(this);
