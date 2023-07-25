var TerminalEmulator = {
  init: function (screen) {
    var inst = Object.create(this);
    inst.screen = screen;
    inst.createInput();

    return inst;
  },

  createInput: function () {
    var inputField = document.createElement('div');
    var inputWrap = document.createElement('div');

    inputField.className = 'terminal_emulator__field';
    inputField.innerHTML = '';
    inputWrap.appendChild(inputField);
    this.screen.appendChild(inputWrap);
    this.field = inputField;
    this.fieldwrap = inputWrap;
  },


  enterInput: function (input) {
    return new Promise((resolve, reject) => {
      var randomSpeed = (max, min) => {
        return Math.random() * (max - min) + min;
      };

      var speed = randomSpeed(70, 90);
      var i = 0;
      var str = '';
      var type = () => {

        str = str + input[i];
        this.field.innerHTML = str.replace(/ /g, '&nbsp;');
        i++;

        setTimeout(() => {
          if (i < input.length) {
            if (i % 5 === 0) speed = randomSpeed(80, 120);
            type();
          } else {
            console.log('tick');
            setTimeout(() => {
              console.log('tock');
              resolve();
            }, 400);

          }
        }, speed);


      };


      type();

    });
  },

  enterCommand: function () {
    return new Promise((resolve, reject) => {
      var resp = document.createElement('div');
      resp.className = 'terminal_emulator__command';
      resp.innerHTML = this.field.innerHTML;
      this.screen.insertBefore(resp, this.fieldwrap);

      this.field.innerHTML = '';
      resolve();
    });
  },

  enterResponse: function (response) {

    return new Promise((resolve, reject) => {
      var resp = document.createElement('div');
      resp.className = 'terminal_emulator__response';
      resp.innerHTML = response;
      this.screen.insertBefore(resp, this.fieldwrap);

      resolve();
    });


  },

  wait: function (time, busy) {
    busy = busy === undefined ? true : busy;
    return new Promise((resolve, reject) => {
      if (busy) {
        this.field.classList.add('waiting');
      } else {
        this.field.classList.remove('waiting');
      }
      setTimeout(() => {
        resolve();
      }, time);
    });
  },

  reset: function () {
    return new Promise((resolve, reject) => {
      this.field.classList.remove('waiting');
      resolve();
    });
  } };




/*
 * 
 * This is where the magic happens
 *
 */


var TE = TerminalEmulator.init(document.getElementById('screen'));


TE.wait(1000, false).
then(TE.enterInput.bind(TE, 'whoami')).
then(TE.enterCommand.bind(TE)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: rodrigo.álvarez')).
then(TE.wait.bind(TE, 2000)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;address: coyoacán.ave.333-3@bj.cdmx')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;&nbsp;&nbsp;birth: 1979-02-21')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mail: incognia@gmail.com')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;&nbsp;&nbsp;phone: +52-55-4516-3631')).
then(TE.wait.bind(TE, 600)).
then(TE.enterResponse.bind(TE, '-----------------------------------------------------[ Updated: 2023-07-14 ]--')).
then(TE.wait.bind(TE, 2000, false)).
then(TE.enterInput.bind(TE, 'tree /var/log/jobs')).
then(TE.enterCommand.bind(TE)).
then(TE.enterResponse.bind(TE, '[-]──2021-2023&nbsp;&nbsp;&nbsp;&nbsp;fondeso&nbsp;&nbsp;&nbsp;&nbsp;Fondo para el Desarrollo Social de la CDMX')).
then(TE.wait.bind(TE, 2000)).
then(TE.enterResponse.bind(TE, '&nbsp;│ [-]────0060&nbsp;&nbsp;&nbsp;&nbsp;infra&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senior Infrastructure Engineer')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│&nbsp;&nbsp;├─────0064&nbsp;&nbsp;&nbsp;&nbsp;ansible&nbsp;&nbsp;&nbsp;&nbsp;Deployment orchestration and sys updates')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│&nbsp;&nbsp;├─────0063&nbsp;&nbsp;&nbsp;&nbsp;docker&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Containerize production apps and envs')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│&nbsp;&nbsp;├─────0062&nbsp;&nbsp;&nbsp;&nbsp;p2v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Physical to virtual migration')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│&nbsp;&nbsp;└─────0061&nbsp;&nbsp;&nbsp;&nbsp;hyper-v&nbsp;&nbsp;&nbsp;&nbsp;Virtualization host install for Linux VMs')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│')).
then(TE.enterResponse.bind(TE, '[-]──2018-2019&nbsp;&nbsp;&nbsp;&nbsp;congreso&nbsp;&nbsp;&nbsp;Congreso de la Ciudad de México')).
then(TE.wait.bind(TE, 2000)).
then(TE.enterResponse.bind(TE, '&nbsp;│ [-]────0050&nbsp;&nbsp;&nbsp;&nbsp;infra&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System Integration Manager')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│&nbsp;&nbsp;├─────0053&nbsp;&nbsp;&nbsp;&nbsp;e-voting&nbsp;&nbsp;&nbsp;E-Voting System design and implementation')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│&nbsp;&nbsp;├─────0052&nbsp;&nbsp;&nbsp;&nbsp;gcp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cloud migration (services and apps)')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│&nbsp;&nbsp;└─────0051&nbsp;&nbsp;&nbsp;&nbsp;cms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Citizen-oriented web portal implementation')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;│')).
then(TE.enterResponse.bind(TE, '[-]──2015-2017&nbsp;&nbsp;&nbsp;&nbsp;grenaser&nbsp;&nbsp;&nbsp;Proyecto Mexicano del Carbono')).
then(TE.wait.bind(TE, 2000)).
then(TE.enterResponse.bind(TE, '&nbsp;└─[-]────0040&nbsp;&nbsp;&nbsp;&nbsp;infra&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infrastructure Architect')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;&nbsp;&nbsp;├─────0043&nbsp;&nbsp;&nbsp;&nbsp;science&nbsp;&nbsp;&nbsp;&nbsp;Train scientific staff on clustered db use')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;&nbsp;&nbsp;├─────0042&nbsp;&nbsp;&nbsp;&nbsp;postgres&nbsp;&nbsp;&nbsp;HA PostgreSQL database cluster creation')).
then(TE.wait.bind(TE, 300)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;&nbsp;&nbsp;└─────0041&nbsp;&nbsp;&nbsp;&nbsp;site&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build a complete server room from scratch')).
then(TE.wait.bind(TE, 600)).
then(TE.enterResponse.bind(TE, '---------------------------------------[ Last jobs: 3 | Active since: 2000 ]--')).
then(TE.wait.bind(TE, 2000, false)).
then(TE.enterInput.bind(TE, 'ls /bin/skils')).
then(TE.enterCommand.bind(TE)).
then(TE.wait.bind(TE, 400)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;linux&nbsp;&nbsp;unix&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;windows&nbsp;bash&nbsp;&nbsp;&nbsp;&nbsp;powershell&nbsp;python&nbsp;c++')).
then(TE.wait.bind(TE, 400)).
then(TE.enterResponse.bind(TE, '&nbsp;&nbsp;docker&nbsp;kubernetes&nbsp;ansible&nbsp;jenkins&nbsp;gcp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;azure&nbsp;&nbsp;aws')).
then(TE.reset.bind(TE));