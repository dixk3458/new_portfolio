'use strict';

const homeTitleInstance = new TypeIt('.home__title', {
  speed: 50,
});

homeTitleInstance
  .exec(
    async () => await handleHomeDescriptionInstance(homeDescriptionInstance)
  )
  .go()
  .destroy();

const homeDescriptionInstance = new TypeIt('.home__description--strong', {
  loop: true,
  speed: 50,
});

function handleHomeDescriptionInstance(instance) {
  instance
    .pause(1000)
    .move(-7) //
    .move(null, { to: 'END' })
    .delete() //
    .type('하고싶은')
    .pause(1000)
    .move(-6)
    .move(null, { to: 'END' })
    .delete()
    .type('성장해 나가고 싶은')
    .pause(1000)
    .move(-6)
    .move(null, { to: 'END' })
    .delete()
    .go();
}
