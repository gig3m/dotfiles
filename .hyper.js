module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 18,

    // font family with optional fallbacks
    fontFamily: 'Source Code Pro, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color (hex)
    cursorColor: '#F81CE5',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: '#000',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    termCSS: '',

    // custom padding
    padding: '12px 14px',

    // Hyperterm Summon
    // summonShortcut: '`',

    hyperSpotify: {
      position: 'bottom' // or 'top'
    },
    summon: {
      hideDock: true,
      hideOnBlur: false,
      hotkey: '`'
    }

  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hypersolar`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperterm-blink',
    'hyperterm-summon',
    'hyper-zero-dark-matrix',
    'hyper-quit',
    'hyper-spotify',
    'hypercwd'
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [
  ]
};
