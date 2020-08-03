// typeIT
    new TypeIt("#companionMethods", {
      speed: 50,
      waitUntilVisible: true,
      loop: true
    })
      .type("software Engineering", { delay: 300 })
      .move(-19)
      .delete(1)
      .type('S')
      .move('END')
      .pause(1000)
      .delete(20)
      .type("Web designer", { delay: 300 })
      .move(-7)
      .delete(1)
      .type('D')
      .move('END')
      .pause(1000)
      .delete(12)
      .type("Content Creetor", { delay: 300 })
      .move(-3)
      .delete(1)
      .type('a')
      .move('END')
      .pause(1000)
      .go();