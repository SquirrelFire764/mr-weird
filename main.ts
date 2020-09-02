enum ActionKind {
    Walking,
    Idle,
    Jumping,
    attack,
    thean,
    Heart,
    HeartAction
}
namespace SpriteKind {
    export const Summonblorby = SpriteKind.create()
    export const summonPaintbrush = SpriteKind.create()
    export const summonoopsie = SpriteKind.create()
    export const summonHeart = SpriteKind.create()
    export const SpecialItem = SpriteKind.create()
    export const SummoncrackedOopsy = SpriteKind.create()
    export const SummonCrackedOopsie = SpriteKind.create()
    export const SummonCrackedAvrage = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const bossProjectile = SpriteKind.create()
    export const Heart = SpriteKind.create()
}
function jumpyWeird () {
    Mr_Weird.setImage(img`
        . . . . . . . . . . . d 3 3 7 7 7 3 3 d . . . . . . . . . . 
        . . . . . . . . . . . 4 d a 3 5 3 a d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d d d d d d d 4 . . . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . a a 4 d f 5 f 5 f d 4 a a . . . . . . . . 
        . . . . . . . . b . . 4 d f 5 f 5 f d 4 . . b b . . . . . . 
        . . . . . . . . b . . 4 d f f f f f d 4 . . b b . . . . . . 
        . . . . . . . . . a a 4 d f f 5 f f d 4 a a . . . . . . . . 
        . . . . . . . . . 6 a 4 d f f f f f d 4 a 6 . . . . . . . . 
        . . . . . . . . 6 6 7 4 d f 5 f 5 f d 4 7 6 6 . . . . . . . 
        . . . . . . . 6 6 7 9 4 d f 5 f 5 f d 4 9 7 6 6 . . . . . . 
        . . . . . . 6 6 7 9 9 4 d f 5 5 5 f d 4 9 9 7 6 6 . . . . . 
        . . . . . . 6 7 9 9 9 4 d f f f f f d 4 9 9 9 7 6 . . . . . 
        . . . . . . 6 7 9 9 9 4 a a 3 3 3 a a 4 9 9 9 7 6 . . . . . 
        . . . . . . 6 7 9 9 9 4 a a a 3 a a a 4 9 9 9 7 6 . . . . . 
        . . . . . . 6 7 9 9 9 4 a a 3 3 3 a a 4 9 9 9 7 6 . . . . . 
        . . . . . . 6 7 9 9 9 4 4 4 4 d 4 4 4 4 9 9 9 7 6 . . . . . 
        . . . . . . 6 6 7 9 9 4 4 4 d c d 4 4 4 9 9 7 6 6 . . . . . 
        . . . . . . . 6 6 7 9 4 4 d b a b d 4 4 9 7 6 6 . . . . . . 
        . . . . . . . . 6 6 7 4 4 4 d c d 4 4 4 7 6 6 . . . . . . . 
        . . . . . . . . . 6 6 4 4 4 4 d 4 4 4 4 6 6 . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . 
        . . . . . . . . . . . d f 4 4 4 4 4 f d . . . . . . . . . . 
        . . . . . . . . . . . d d f 4 4 4 f d d . . . . . . . . . . 
        . . . . . . . . . . . . d d f 4 f d d . . . . . . . . . . . 
        . . . . . . . . . . . . . d d 3 d d . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f d f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
        `)
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Mr_Weird.isHittingTile(CollisionDirection.Bottom)) {
        if (Mr_Weird.vy > 215) {
            Mr_Weird.say("Oof! Ahh!", 500)
            info.changeLifeBy(-1)
            game.showLongText("You fell from a too high height!", DialogLayout.Bottom)
        }
    }
})
function BottomWhatever () {
    FootWhatever = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a f f f a 2 . . . . . . . . . 
        . . . . . . . . . 2 a b a b a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.boss)
    statusbar = statusbars.create(20, 2, StatusBarKind.EnemyHealth)
    statusbar.max = 10
    statusbar.attachToSprite(FootWhatever)
    statusbar.setColor(3, 4, 1)
    tiles.placeOnTile(FootWhatever, tiles.getTileLocation(6, 8))
    FootWhatever.ay = Gravity
    FootWhatever.follow(Mr_Weird, 60)
    attack = animation.createAnimation(ActionKind.attack, 150)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 . . . . . . . . . 
        . . . . . . 1 1 1 2 a . . . a 2 . . . . . . . . . 
        . . . . . 1 1 1 . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . 1 1 1 2 a f f f a 2 . . . . . . . . . 
        . . . . . 1 1 1 1 2 a b a b a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 . . . . . . . . . 
        . . . . . . 1 1 1 2 a . . . a 2 . . . . . . . . . 
        . . . . . 1 1 1 3 2 a . . . a 2 . . . . . . . . . 
        . . . . . 3 3 3 3 2 a . . . a 2 . . . . . . . . . 
        . . . . . 3 1 1 1 2 a f f f a 2 . . . . . . . . . 
        . . . . . 1 1 1 1 2 a b a b a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        . . . . . . 1 1 1 2 a . . . a 2 1 1 1 . . . . . . 
        . . . . . 1 1 1 3 2 a . . . a 2 . 1 1 1 . . . . . 
        . . . . . 3 3 3 3 2 a . . . a 2 . . . . . . . . . 
        . . . . . 3 1 1 1 2 a f f f a 2 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 2 a b a b a 2 1 1 1 1 . . . . . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        . . . . . . 1 1 1 2 a . . . a 2 1 1 1 . . . . . . 
        . . . . . 1 1 1 3 2 a . . . a 2 3 1 1 1 . . . . . 
        . . . . . 3 3 3 3 2 a . . . a 2 3 3 3 3 . . . . . 
        . . . . . 3 1 1 1 2 a f f f a 2 1 1 1 3 . . . . . 
        . . . . . 1 1 1 1 2 a b a b a 2 1 1 1 1 . . . . . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        d d d . . . 1 1 1 2 a . . . a 2 1 1 1 . . . . . . 
        . . d d d 1 1 1 3 2 a . . . a 2 3 1 1 1 . . . . . 
        . . . . d 3 3 3 3 2 a . . . a 2 3 3 3 3 . . . . . 
        d d . . d 3 1 1 1 2 a f f f a 2 1 1 1 3 . . . . . 
        . d d d d 1 1 1 1 2 a b a b a 2 1 1 1 1 . . . . . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        d d d . . . 1 1 1 2 a . . . a 2 1 1 1 . . . . . . 
        d 3 d d d 1 1 1 3 2 a . . . a 2 3 1 1 1 . . . . . 
        d 3 3 3 d 3 3 3 3 2 a . . . a 2 3 3 3 3 . . . . . 
        d d 3 3 d 3 1 1 1 2 a f f f a 2 1 1 1 3 . . . . . 
        . d d d d 1 1 1 1 2 a b a b a 2 1 1 1 1 . . . . . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        d d d . . . 1 1 1 2 a . . . a 2 1 1 1 . . . d d d 
        d 3 d d d 1 1 1 3 2 a . . . a 2 3 1 1 1 d d d . . 
        d 3 3 3 d 3 3 3 3 2 a . . . a 2 3 3 3 3 d . . . . 
        d d 3 3 d 3 1 1 1 2 a f f f a 2 1 1 1 3 d . . d d 
        . d d d d 1 1 1 1 2 a b a b a 2 1 1 1 1 d d d d . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        . . . . . . . . 1 2 a . . . a 2 1 . . . . . . . . 
        d d d . . . 1 1 1 2 a . . . a 2 1 1 1 . . . d d d 
        d 3 d d d 1 1 1 3 2 a . . . a 2 3 1 1 1 d d d 3 d 
        d 3 3 3 d 3 3 3 3 2 a . . . a 2 3 3 3 3 d 3 3 3 d 
        d d 3 3 d 3 1 1 1 2 a f f f a 2 1 1 1 3 d 3 3 d d 
        . d d d d 1 1 1 1 2 a b a b a 2 1 1 1 1 d d d d . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a . . . a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a 5 5 5 a 2 1 . . . . . . . . 
        . . . . . . . . 1 2 a 5 5 5 a 2 1 . . . . . . . . 
        d d d . . . 1 1 1 2 a 5 5 5 a 2 1 1 1 . . . d d d 
        d 3 d d d 1 1 1 3 2 a 5 5 5 a 2 3 1 1 1 d d d 3 d 
        d 3 3 3 d 3 3 3 3 2 a 5 5 5 a 2 3 3 3 3 d 3 3 3 d 
        d d 3 3 d 3 1 1 1 2 a f f f a 2 1 1 1 3 d 3 3 d d 
        . d d d d 1 1 1 1 2 a b a b a 2 1 1 1 1 d d d d . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    attack.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 a 3 3 3 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . . 2 a 5 5 5 a 2 . . . . . . . . . 
        . . . . . . . . 1 2 a 5 5 5 a 2 1 . . . . . . . . 
        . . . . . . . . 1 2 a 5 5 5 a 2 1 . . . . . . . . 
        d d d . . . 1 1 1 2 a 5 5 5 a 2 1 1 1 . . . d d d 
        d 3 d d d 1 1 1 3 2 a 5 5 5 a 2 3 1 1 1 d d d 3 d 
        d 3 3 3 d 3 3 3 3 2 a 5 5 5 a 2 3 3 3 3 d 3 3 3 d 
        d d 3 3 d 3 1 1 1 2 a f f f a 2 1 1 1 3 d 3 3 d d 
        . d d d d 1 1 1 1 2 a b a b a 2 1 1 1 1 d d d d . 
        . . . . . . . . . 2 a a f a a 2 . . . . . . . . . 
        . . . . . . . . . 2 a a b a a 2 . . . . . . . . . 
        . . . . . . . . . a a c f b a a . . . . . . . . . 
        . . . . . . . . a a c f d f b a a . . . . . . . . 
        . . . . . . . a a c f d f d f b a a . . . . . . . 
        . . . . . . a a c f d f d f d f b a a . . . . . . 
        . . . . . a a c f d f d f d f d f b a a . . . . . 
        . . . . a a c f d f d f d f d f d f b a a . . . . 
        . . . a a c f d f d f d d d f d f d f b a a . . . 
        . . a a c f d f d f d d d d d f d f d f b a a . . 
        . . a c . d . d . d . d . d . d . d . d . b a . . 
        . . a . . . . . . . . . . . . . . . . . . . a . . 
        . . . . . . d . d . d . d . d . d . d . . . . . . 
        . . . . d . d . d . d . d . d . d . d . d . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(FootWhatever, attack)
    animation.setAction(FootWhatever, ActionKind.attack)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (holdingOopsie == 1) {
        oopsie = sprites.createProjectileFromSprite(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 4 4 4 4 4 3 2 2 2 2 3 3 e 3 
            3 3 3 4 4 4 4 3 2 2 2 3 3 e e 3 
            3 5 3 3 4 4 4 3 2 2 3 3 e e e 3 
            3 5 5 3 3 4 4 3 2 3 3 e e e e 3 
            3 5 5 5 3 3 4 3 3 3 e e e e e 3 
            3 5 5 5 5 3 3 3 3 e e e e e e 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 7 7 7 7 3 3 3 3 3 a a a a a 3 
            3 7 7 7 3 3 6 3 9 3 3 a a a a 3 
            3 7 7 3 3 6 6 3 9 9 3 3 a a a 3 
            3 7 3 3 6 6 6 3 9 9 9 3 3 a a 3 
            3 3 3 6 6 6 6 3 9 9 9 9 3 3 a 3 
            3 3 6 6 6 6 6 3 9 9 9 9 9 3 3 3 
            3 6 6 6 6 6 6 3 9 9 9 9 9 9 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, Mr_Weird, 160, 0)
        if (LookingLeft == 1) {
            oopsie.image.flipX()
            oopsie.vx = -160
        }
        oopsie.setFlag(SpriteFlag.DestroyOnWall, false)
        oopsie.setFlag(SpriteFlag.Ghost, false)
    } else if (holdingCrackedOopsie == 1) {
        CrackedOopsie = sprites.createProjectileFromSprite(img`
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . . . 3 . 3 3 3 3 3 3 3 3 . . . 
            3 3 . . 3 3 3 3 3 3 3 3 . . 3 3 
            3 . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 9 9 6 7 9 9 3 3 3 3 3 
            3 3 3 3 3 9 9 6 7 9 9 3 3 3 3 3 
            3 3 3 3 3 6 6 7 6 7 7 3 3 3 3 3 
            3 3 3 3 3 7 7 6 7 6 6 3 3 3 3 3 
            3 3 3 3 3 9 9 7 6 9 9 3 3 3 3 3 
            3 3 3 3 3 9 9 7 6 9 9 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 . . 3 
            3 . . 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            `, Mr_Weird, 100, 0)
        if (LookingLeft == 1) {
            CrackedOopsie.image.flipX()
            CrackedOopsie.vx = -160
        }
        CrackedOopsie.setFlag(SpriteFlag.DestroyOnWall, false)
        CrackedOopsie.setFlag(SpriteFlag.Ghost, false)
    } else {
        avrage = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . 3 9 7 3 7 9 3 . . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . 3 9 7 3 7 9 3 . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Mr_Weird, 160, 0)
        if (LookingLeft == 1) {
            avrage.image.flipX()
            avrage.vx = -160
        }
    }
})
function createCrackedOopsie () {
    for (let value of tiles.getTilesByType(myTiles.tile6)) {
        CrackedOopsie = sprites.create(img`
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . . . 3 . 3 3 3 3 3 3 3 3 . . . 
            3 3 . . 3 3 3 3 3 3 3 3 . . 3 3 
            3 . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 9 9 6 7 9 9 3 3 3 3 3 
            3 3 3 3 3 9 9 6 7 9 9 3 3 3 3 3 
            3 3 3 3 3 6 6 7 6 7 7 3 3 3 3 3 
            3 3 3 3 3 7 7 6 7 6 6 3 3 3 3 3 
            3 3 3 3 3 9 9 7 6 9 9 3 3 3 3 3 
            3 3 3 3 3 9 9 7 6 9 9 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 . . 3 
            3 . . 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            `, SpriteKind.SummonCrackedOopsie)
        CrackedOopsie.destroy()
        tiles.setTileAt(value, myTiles.tile0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.SummonCrackedOopsie, function (sprite, otherSprite) {
    game.showLongText("If you press \"e\", you can throw a projectile!", DialogLayout.Bottom)
    otherSprite.destroy()
    holdingCrackedOopsie = 1
    Mr_Weird.setImage(img`
        . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . 
        . . . . . . . . . . . . . b b 5 b b . . . . . . . . . . . . 
        . . . . . . . . . . . d 1 3 3 5 3 3 1 d . . . . . . . . . . 
        . . . . . . . . . . . d 1 3 3 5 3 3 1 d . . . . . . . . . . 
        . . . . . . . . . . . 4 d a 3 5 3 a d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d d d d d d d 4 . . . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . a a 4 d f f f f f d 4 a a . . . . . . . . 
        . . . . . . . . b 3 . 4 d f 5 f 5 f d 4 . 3 b b b 3 . . . . 
        . . . . . . . . b . 3 4 d f f f f f d 4 3 . b b b . 3 . . . 
        . . . . . . . . . a a 4 d f f 5 f f d 4 a a . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 5 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f f f f f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a a 3 a a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 d b a b d 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . 
        . . . . . . . . . . . d f 4 4 4 4 4 f d . . . . . . . . . . 
        . . . . . . . . . . . d d f 4 4 4 f d d . . . . . . . . . . 
        . . . . . . . . . . . . d d f 4 f d d . . . . . . . . . . . 
        . . . . . . . . . . . . . d d 3 d d . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f d f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
        `)
    LookingLeft = 1
    info.changeScoreBy(2000)
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (Blorbyhelpsyou) {
        Mr_Weird.setImage(img`
            . . . . . . . . . . 3 1 1 b b b 1 1 3 . . . . . . . . . . . 
            . . . . . . . . . 3 3 1 b b 5 b b 1 3 3 . . . . . . . . . . 
            . . . . . . . . . 3 d 1 3 3 5 3 3 1 d 3 . . . . . . . . . . 
            . . . . . . . . . 3 d 1 3 3 5 3 3 1 d 3 . . . . . . . . . . 
            . . . . . . . . . 3 4 d a 3 5 3 a d 4 3 . . . . . . . . . . 
            . . . . . . . . 3 3 4 d d d d d d d 4 3 3 . . . . . . . . . 
            . . . . . . . 3 3 a 4 d f f f f f d 4 a 3 3 3 . . . . . . . 
            . . . . . . . a a a 4 d f f f f f d 4 a a a 3 . . . . . . . 
            . . . . . . . b 9 6 4 d f 5 f 5 f d 4 6 6 b b . . . . . . . 
            . . . . . . . b 6 6 4 d f f f f f d 4 9 6 b b . . . . . . . 
            . . . . . . . a a a 4 d f f 5 f f d 4 a a a 3 . . . . . . . 
            . . . . . . . 3 4 a 4 d f f f f f d 4 a 4 3 . . . . . . . . 
            . . . . . . . 3 4 1 4 d f 5 f 5 f d 4 1 4 3 . . . . . . . . 
            . . . . . . . 3 4 5 4 d f 5 f 5 f d 4 5 4 3 . . . . . . . . 
            . . . . . . . 3 4 1 4 d f 5 5 5 f d 4 1 4 3 . . . . . . . . 
            . . . . . . . 3 4 1 4 d f f f f f d 4 1 4 3 . . . . . . . . 
            . . . . . . . 3 4 5 4 1 1 1 1 1 1 1 4 5 4 3 . . . . . . . . 
            . . . . . . . 3 4 1 4 1 1 1 1 1 1 1 4 1 4 3 . . . . . . . . 
            . . . . . . . 3 4 1 4 1 1 1 1 1 1 1 4 1 4 3 . . . . . . . . 
            . . . . . . . 3 4 5 4 4 4 4 d 4 4 4 4 5 4 3 . . . . . . . . 
            . . . . . . . 3 4 1 4 4 4 d c d 4 4 4 1 4 3 3 . . . . . . . 
            . . . . . . . 4 4 1 4 4 d b a b d 4 4 1 4 4 3 . . . . . . . 
            . . . . . . . 4 5 5 4 4 4 d c d 4 4 4 5 5 4 3 . . . . . . . 
            . . . . . . . 4 5 1 4 4 4 4 d 4 4 4 4 1 5 4 3 . . . . . . . 
            . . . . . . . 4 1 1 4 4 4 4 4 4 4 4 4 1 1 4 3 . . . . . . . 
            . . . . . . . 4 5 5 f 4 4 4 4 4 4 4 f 5 5 4 3 . . . . . . . 
            . . . . . . . 4 1 1 d f 4 4 4 4 4 f d 1 1 4 3 . . . . . . . 
            . . . . . . . 4 1 1 d d f 4 4 4 f d d 1 1 4 3 . . . . . . . 
            . . . . . . . 4 5 5 5 d d f 4 f d d 5 5 5 4 3 . . . . . . . 
            . . . . . . . 4 1 1 1 1 d d 3 d d 1 1 1 1 4 3 . . . . . . . 
            . . . . . . . 3 1 1 1 1 1 f d f 1 1 1 1 1 3 3 . . . . . . . 
            . . . . . . . 3 3 5 5 5 5 5 f 5 5 5 5 5 3 3 . . . . . . . . 
            `)
        LookingLeft = 1
    } else {
        Mr_Weird.setImage(img`
            . . . . . . . . . . . d 3 3 7 7 7 3 3 d . . . . . . . . . . 
            . . . . . . . . . . . 4 d a 3 5 3 a d 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 d d d d d d d 4 . . . . . . . . . . 
            . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
            . . . . . . . . . a a 4 d f 5 f 5 f d 4 a a . . . . . . . . 
            . . . . . . . . b . . 4 d f 5 f 5 f d 4 . . b b . . . . . . 
            . . . . . . . . b . . 4 d f f f f f d 4 . . b b . . . . . . 
            . . . . . . . . . a a 4 d f f 5 f f d 4 a a . . . . . . . . 
            . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
            . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 d f 5 5 5 f d 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 d f f f f f d 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 a a a 3 a a a 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 4 d b a b d 4 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
            . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
            . . . . . . . . . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . 
            . . . . . . . . . . . d f 4 4 4 4 4 f d . . . . . . . . . . 
            . . . . . . . . . . . d d f 4 4 4 f d d . . . . . . . . . . 
            . . . . . . . . . . . . d d f 4 f d d . . . . . . . . . . . 
            . . . . . . . . . . . . . d d 3 d d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . f d f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
            `)
        LookingLeft = 1
    }
})
function spawn_point () {
    for (let value of tiles.getTilesByType(myTiles.tile15)) {
        tiles.setTileAt(value, myTiles.transparency16)
        tiles.placeOnTile(Mr_Weird, value)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mr_Weird.isHittingTile(CollisionDirection.Bottom)) {
        Mr_Weird.vy = -115
    } else if (Blorbyhelpsyou == 1) {
        Mr_Weird.vy = -115
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    game.showLongText("Whatever is in this level. BEWARE! Also, you made it to the next level.", DialogLayout.Bottom)
    info.setLife(20)
    info.stopCountdown()
    tiles.setTilemap(tiles.createTilemap(hex`1e001e000400000000000000000000000000000000000000000000000000000000000202000000000000000000000a00000000000000000000000000000000000202010000000000000000000b00000000000000000a00000000000000000202020000000000000000000000000000000000000b000000000000000000000000000000000900000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000b00000000000000000000000000000000000000000000000400090000000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000009000900090000000000000000000a00000000000000000005000000000007070707070000000000000000000b00000000000000000000000000000008080808080000000000000000000000000000000000000000000000000007070707070000000000000000000000000000000000000000000000000008080808080000000000000000000000000000000a000000000000000000080008000800000000000a00000000000000000406040000000000000000080808080800000000000b00000000000000000606060606000000000000080008000800000000000000000000000000000000000000000000000000080808080800000000000000000000000000000000000000000000000000080008000800000000000000000000000000000000000000000000000000080808080800000000000000000000000000000000000000000000000000080008000800000000000000000000000000000000000000000000000000080808080800000000000000000000000000000000000000000a00000000080000000800000000000000000000000000000000000000000b0000000008080008080000000000000000000000000000000000000000000000000008080808080000000000000000000000000000000000000000000000000008080008080000000000000000000000000000000000000000000000000008080008080000000000000000000000000000000000000003000000000008000000080000000000000000000000000000000000000000000a000000010800080800000a00000004000000000000000a00000004`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
        2 2 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.dungeon.chestClosed,myTiles.tile7,myTiles.tile15,myTiles.tile16,myTiles.tile10,myTiles.tile4,myTiles.tile11,myTiles.tile13,sprites.dungeon.collectibleBlueCrystal,myTiles.tile20,myTiles.tile21], TileScale.Sixteen))
    scene.setBackgroundImage(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `)
    scene.setBackgroundColor(1)
    holdingOopsie = 0
    Blorbyhelpsyou = 0
    spawn_point()
    createBlorby()
    info.setLife(5)
    YodelyEnimy()
    createOopsie()
    createCrackedOopsie()
    BottomWhatever()
    bossLevel = 1
    Mr_Weird.setImage(img`
        . . . . . . . . . . d 1 3 3 5 3 3 1 d . . . . . . . . . . . 
        . . . . . . . . . . 4 d a 3 5 3 a d 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 d d d d d d d 4 . . . . . . . . . . . 
        . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . . 
        . . . . . . . . a a 4 d f f f f f d 4 a a . . . . . . . . . 
        . . . . . . . b 3 . 4 d f 5 f 5 f d 4 . 3 b b b 3 . . . . . 
        . . . . . . . b . 3 4 d f f f f f d 4 3 . b b b . 3 . . . . 
        . . . . . . . . a a 4 d f f 5 f f d 4 a a . . . . . . . . . 
        . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . . 
        . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 d f 5 5 5 f d 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 d f f f f f d 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 a a a 3 a a a 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 4 d b a b d 4 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . . 
        . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . 
        . . . . . . . . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . . 
        . . . . . . . . . . d f 4 4 4 4 4 f d . . . . . . . . . . . 
        . . . . . . . . . . d d f 4 4 4 f d d . . . . . . . . . . . 
        . . . . . . . . . . . d d f 4 f d d . . . . . . . . . . . . 
        . . . . . . . . . . . . d d 3 d d . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f d f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . 
        `)
    info.setScore(0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LookingLeft == 0) {
        LookingLeft = 1
        Mr_Weird.image.flipX()
    }
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Cool_down()
    info.changeScoreBy(-200)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    jumpyWeird()
    superYou()
})
info.onCountdownEnd(function () {
    Blorbyhelpsyou = 0
    Mr_Weird.setImage(img`
        . . . . . . . . . . . d 3 3 7 7 7 3 3 d . . . . . . . . . . 
        . . . . . . . . . . . 4 d a 3 5 3 a d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d d d d d d d 4 . . . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . a a 4 d f 5 f 5 f d 4 a a . . . . . . . . 
        . . . . . . . . b . . 4 d f 5 f 5 f d 4 . . b b . . . . . . 
        . . . . . . . . b . . 4 d f f f f f d 4 . . b b . . . . . . 
        . . . . . . . . . a a 4 d f f 5 f f d 4 a a . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 5 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f f f f f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a a 3 a a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 d b a b d 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . 
        . . . . . . . . . . . d f 4 4 4 4 4 f d . . . . . . . . . . 
        . . . . . . . . . . . d d f 4 4 4 f d d . . . . . . . . . . 
        . . . . . . . . . . . . d d f 4 f d d . . . . . . . . . . . 
        . . . . . . . . . . . . . d d 3 d d . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f d f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 
        `)
})
function superYou () {
    if (controller.up.isPressed()) {
        light.showAnimation(light.rainbowAnimation, 500)
        controller.startLightPulse(0xff9da5, 5000)
        Blorbyhelpsyou = 0
    }
}
function resetLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LookingLeft == 1) {
        LookingLeft = 0
        Mr_Weird.image.flipX()
    }
})
function createBlorby () {
    for (let value of tiles.getTilesByType(myTiles.tile16)) {
        Blorby = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b b b b b b b b b . . . . 
            . . b 6 f 4 4 4 4 4 f 6 b . . . 
            . . . b 4 f 4 4 4 f 4 b . . . . 
            . . . b 4 d d d d d 4 b . . . . 
            . . . b 4 d 7 5 7 d 4 b . . . . 
            . . b d 4 d 5 7 5 d 4 d b . . . 
            . . d b 4 d 5 5 5 d 4 b d . . . 
            . . b b 4 d d d d d 4 b b . . . 
            . . b d 4 d 5 1 5 d 4 d b . . . 
            . . d b 4 d 1 1 1 d 4 b d . . . 
            . . b d 4 d f 1 f d 4 d b . . . 
            . . b d 4 d f f f d 4 d b . . . 
            . . . b 4 d d d d d 4 b . . . . 
            `, SpriteKind.Summonblorby)
        tiles.setTileAt(value, myTiles.tile0)
        tiles.placeOnTile(Blorby, value)
        Blorby.startEffect(effects.halo)
    }
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    Mr_Weird.setImage(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a a 3 a a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 d b a b d 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . 
        . . . . . . . . . . . d f 4 4 4 4 4 f d . . . . . . . . . . 
        . . . . . . . . . . . d d f 4 4 4 f d d . . . . . . . . . . 
        . . . . . . . . . . . . d d f 4 f d d . . . . . . . . . . . 
        . . . . . . . . . . . . . d d 3 d d . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f d f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
        `)
    LookingLeft = 1
})
function YodelyEnimy () {
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal)) {
        Yodely = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 . . . . . . . 
            . . . . 3 5 5 5 3 . . . . . . . 
            . . . . 3 3 5 3 3 . . . . . . . 
            . . . 3 3 1 3 1 3 3 . . . . . . 
            . . . 3 1 3 1 3 1 3 . . . . . . 
            . . . 3 3 3 6 3 3 3 . . . . . . 
            . . . . 3 6 6 6 3 . . . . . . . 
            . . . 3 3 1 1 1 3 3 . . . . . . 
            . . 3 3 1 6 1 6 1 3 3 . . . . . 
            . . 3 1 6 6 1 6 6 1 3 . . . . . 
            . . 3 1 6 6 1 6 6 1 3 . . . . . 
            . . 3 9 1 6 1 6 1 9 3 . . . . . 
            . . 3 3 9 1 1 1 9 3 3 . . . . . 
            . . . 3 3 9 1 9 3 3 . . . . . . 
            . . . . 3 3 1 3 3 . . . . . . . 
            . . . . . 3 9 3 . . . . . . . . 
            . . . . 3 3 1 3 3 . . . . . . . 
            . . . 3 3 3 1 3 3 3 . . . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . 3 1 1 1 f 1 1 1 3 . . . . . 
            . . 3 1 1 f 3 f 1 1 3 . . . . . 
            . . 3 1 1 f 1 f 1 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 3 3 3 3 3 3 3 3 . . . . . 
            `, SpriteKind.Enemy)
        tiles.setTileAt(value, myTiles.tile0)
        tiles.placeOnTile(Yodely, value)
        Yodely.vx = 40
        Yodely.setFlag(SpriteFlag.BounceOnWall, true)
        thean = animation.createAnimation(ActionKind.thean, 150)
        thean.addAnimationFrame(img`
            . . d d d d d d d d d . . . . . 
            . d 3 1 3 3 1 3 3 1 3 d . . . . 
            . . d d 3 5 1 5 3 d d . . . . . 
            . . . . 3 3 5 3 3 . . . . . . . 
            . . . 3 3 1 1 1 3 3 . . . . . . 
            . . . 3 1 3 1 3 1 3 . . . . . . 
            . . . 3 3 3 6 3 3 3 . . . . . . 
            . . . . 3 6 6 6 3 . . . . . . . 
            . . . 3 3 1 1 1 3 3 . . . . . . 
            . . 3 3 1 6 1 6 1 3 3 . . . . . 
            . . 3 1 6 6 1 6 6 1 3 . . . . . 
            . . 3 1 6 6 1 6 6 1 3 . . . . . 
            . . 3 9 1 6 1 6 1 9 3 . . . . . 
            . . 3 3 9 1 1 1 9 3 3 . . . . . 
            . . . 3 3 9 1 9 3 3 . . . . . . 
            . . . . 3 3 1 3 3 . . . . . . . 
            . . . . . 3 9 3 . . . . . . . . 
            . . . . 3 3 1 3 3 . . . . . . . 
            . . . 3 3 3 1 3 3 3 . . . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . 3 1 1 1 f 1 1 1 3 . . . . . 
            . . 3 1 1 f 3 f 1 1 3 . . . . . 
            . . 3 1 1 f 1 f 1 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 3 3 3 3 3 3 3 3 . . . . . 
            `)
        thean.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . 1 a 1 . . . . . . . . 
            . . . . 1 a 1 a 1 . . . . . . . 
            . . . . . 3 a 3 . . . . . . . . 
            . . . . 3 a 6 a 3 . . . . . . . 
            . . . 3 a 1 1 1 a 3 . . . . . . 
            . . 3 a 1 6 1 6 1 a 3 . . . . . 
            . . a 1 6 6 1 6 6 1 a . . . . . 
            . . a 1 6 6 1 6 6 1 a . . . . . 
            . . a 9 1 6 1 6 1 9 a . . . . . 
            . . 3 a 9 1 1 1 9 a 3 . . . . . 
            . . . 3 a 9 1 9 a 3 . . . . . . 
            . . . . 3 a 1 a 3 . . . . . . . 
            . . . . d 3 9 3 d . . . . . . . 
            . . . . 3 a 1 a 3 . . . . . . . 
            . . . 3 a 3 a 3 a 3 . . . . . . 
            . . . a 3 a 3 a 3 a . . . . . . 
            . . 3 1 1 1 f 1 1 1 3 . . . . . 
            . . 3 1 1 f 3 f 1 1 3 . . . . . 
            . . 3 1 1 f . f 1 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 3 3 3 3 3 3 3 3 . . . . . 
            `)
        thean.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . a 5 a . . . . . . . . 
            . . . . a 1 a 1 a . . . . . . . 
            . . . . 1 a 1 a 1 . . . . . . . 
            . . . . a 3 a 3 a . . . . . . . 
            . . . a 3 a 6 a 3 a . . . . . . 
            . . . 3 a 1 1 1 a 3 . . . . . . 
            . . 3 a 1 6 1 6 1 a 3 . . . . . 
            . . a 1 6 6 1 6 6 1 a . . . . . 
            . . a 1 6 6 1 6 6 1 a . . . . . 
            . . a 9 1 6 1 6 1 9 a . . . . . 
            . . 3 a 9 1 1 1 9 a 3 . . . . . 
            . . . 3 a 9 1 9 a 3 . . . . . . 
            . . . . 3 a 1 a 3 . . . . . . . 
            . . . . d 3 9 3 d . . . . . . . 
            . . . . 3 a 1 a 3 . . . . . . . 
            . . . 3 a 3 a 3 a 3 . . . . . . 
            . . . a 3 a 3 a 3 a . . . . . . 
            . . 3 1 1 1 f 1 1 1 3 . . . . . 
            . . 3 1 1 f 3 f 1 1 3 . . . . . 
            . . 3 1 1 f . f 1 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f . f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 3 3 3 3 3 3 3 3 . . . . . 
            `)
        thean.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 a a a 3 . . . . . . . 
            . . . . a 5 5 5 a . . . . . . . 
            . . . . 3 a 5 a 3 . . . . . . . 
            . . . . a 1 a 1 a . . . . . . . 
            . . . . 1 a 1 a 1 . . . . . . . 
            . . . . a 3 a 3 a . . . . . . . 
            . . . a 3 a 6 a 3 a . . . . . . 
            . . a 3 a 1 1 1 a 3 a . . . . . 
            . . 3 a 1 6 1 6 1 a 3 . . . . . 
            . . a 1 6 6 1 6 6 1 a . . . . . 
            . . a 1 6 6 1 6 6 1 a . . . . . 
            . . a 9 1 6 1 6 1 9 a . . . . . 
            . . 3 a 9 1 1 1 9 a 3 . . . . . 
            . . a 3 a 9 1 9 a 3 a . . . . . 
            . . . a 3 a 1 a 3 a . . . . . . 
            . . . 3 d 3 9 3 d 3 . . . . . . 
            . . . . 3 a 1 a 3 . . . . . . . 
            . . . 3 a 3 a 3 a 3 . . . . . . 
            . . . a 3 a 3 a 3 a . . . . . . 
            . . 3 1 1 1 f 1 1 1 3 . . . . . 
            . . 3 1 1 f 3 f 1 1 3 . . . . . 
            . . 3 1 1 f 1 f 1 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 3 3 3 3 3 3 3 3 . . . . . 
            `)
        thean.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 a a a 3 . . . . . . . 
            . . . . a 5 5 5 a . . . . . . . 
            . . . . 3 a 5 a 3 . . . . . . . 
            . . . 3 a 1 a 1 a 3 . . . . . . 
            . . . a 1 a 1 a 1 a . . . . . . 
            . 3 a 3 a 3 a 3 a 3 a 3 . . . . 
            3 a a a 3 a 6 a 3 a a a 3 . . . 
            3 3 a 3 a 1 1 1 a 3 a 3 3 . . . 
            3 b 3 a 1 6 1 6 1 a 3 b 3 3 . . 
            3 1 a 1 6 6 1 6 6 1 a 1 3 3 . . 
            3 b a 1 6 6 1 6 6 1 a b 3 3 . . 
            3 1 a 9 1 6 1 6 1 9 a 1 3 3 . . 
            3 b 3 a 9 1 1 1 9 a 3 b 3 3 . . 
            3 3 a 3 a 9 1 9 a 3 a 3 3 . . . 
            3 a a a 3 a 1 a 3 a a a 3 . . . 
            . 3 3 3 d 3 9 3 d 3 3 3 . . . . 
            . . . . 3 a 1 a 3 . . . . . . . 
            . . . 3 a 3 a 3 a 3 . . . . . . 
            . . . a 3 a 3 a 3 a . . . . . . 
            . . 3 1 1 1 f 1 1 1 3 . . . . . 
            . . 3 1 1 f 3 f 1 1 3 . . . . . 
            . . 3 1 1 f 1 f 1 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 1 f f 1 f f 1 3 . . . . . 
            . . 3 3 3 3 3 3 3 3 3 . . . . . 
            `)
        animation.attachAnimation(Yodely, thean)
        animation.setAction(Yodely, ActionKind.thean)
    }
}
function createOopsie () {
    for (let value of tiles.getTilesByType(sprites.dungeon.chestClosed)) {
        oopsie = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 9 9 6 7 9 9 3 3 3 3 3 
            3 3 3 3 3 9 9 6 7 9 9 3 3 3 3 3 
            3 3 3 3 3 6 6 7 6 7 7 3 3 3 3 3 
            3 3 3 3 3 7 7 6 7 6 6 3 3 3 3 3 
            3 3 3 3 3 9 9 7 6 9 9 3 3 3 3 3 
            3 3 3 3 3 9 9 7 6 9 9 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.summonoopsie)
        tiles.placeOnTile(oopsie, value)
        tiles.setTileAt(value, myTiles.tile0)
        oopsie.startEffect(effects.smiles)
    }
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (easyMode == 0) {
        if (Mr_Weird.isHittingTile(CollisionDirection.Bottom)) {
            Mr_Weird.vy = -115
            Gravity = 50
            Mr_Weird.ay = Gravity
            game.showLongText("You have now entered easy mode.", DialogLayout.Bottom)
            easyMode = 1
        }
    } else {
        Gravity = 200
        Mr_Weird.ay = Gravity
        game.showLongText("You have now exited easy mode.", DialogLayout.Bottom)
        easyMode = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.summonoopsie, function (sprite, otherSprite) {
    game.showLongText("If you press \"e\", you can throw a projectile!", DialogLayout.Bottom)
    otherSprite.destroy()
    holdingOopsie = 1
    Mr_Weird.setImage(img`
        . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . 
        . . . . . . . . . . . . . b b 5 b b . . . . . . . . . . . . 
        . . . . . . . . . . . d 1 3 3 5 3 3 1 d . . . . . . . . . . 
        . . . . . . . . . . . d 1 3 3 5 3 3 1 d . . . . . . . . . . 
        . . . . . . . . . . . 4 d a 3 5 3 a d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d d d d d d d 4 . . . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . a a 4 d f f f f f d 4 a a . . . . . . . . 
        . . . . . . . . b 3 . 4 d f 5 f 5 f d 4 . 3 b b b 3 . . . . 
        . . . . . . . . b . 3 4 d f f f f f d 4 3 . b b b . 3 . . . 
        . . . . . . . . . a a 4 d f f 5 f f d 4 a a . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 5 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f f f f f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a a 3 a a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 d b a b d 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . 
        . . . . . . . . . . . d f 4 4 4 4 4 f d . . . . . . . . . . 
        . . . . . . . . . . . d d f 4 4 4 f d d . . . . . . . . . . 
        . . . . . . . . . . . . d d f 4 f d d . . . . . . . . . . . 
        . . . . . . . . . . . . . d d 3 d d . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f d f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
        `)
    LookingLeft = 1
    oopsie.startEffect(effects.smiles)
    info.changeScoreBy(1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, FootWhatever).value += -2
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, FootWhatever).value <= 0) {
        game.showLongText("you defeated Whatever! This is the end of the game. Hope you enjoyed! - Firesquirre764", DialogLayout.Bottom)
        game.over(true, effects.smiles)
    }
})
sprites.onOverlap(SpriteKind.bossProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.stopCountdown()
    info.changeLifeBy(-1)
    Cool_down()
    FootWhateverProjectile.follow(Mr_Weird, 20)
    info.changeScoreBy(-200)
})
function Cool_down () {
    scene.cameraShake(4, 500)
    for (let index = 0; index < 2; index++) {
        Mr_Weird.setFlag(SpriteFlag.Invisible, true)
        pause(200)
        Mr_Weird.setFlag(SpriteFlag.Invisible, false)
        pause(200)
    }
    pause(200)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Summonblorby, function (sprite, otherSprite) {
    game.showLongText("Blorby is going to now help you on your quest. You can now jump as many times in the air as you like. ", DialogLayout.Bottom)
    otherSprite.destroy()
    Blorbyhelpsyou = 1
    Mr_Weird.setImage(img`
        . . . . . . . . . . . 3 1 1 b b b 1 1 3 . . . . . . . . . . 
        . . . . . . . . . . 3 3 1 b b 5 b b 1 3 3 . . . . . . . . . 
        . . . . . . . . . . 3 d 1 3 3 5 3 3 1 d 3 . . . . . . . . . 
        . . . . . . . . . . 3 d 1 3 3 5 3 3 1 d 3 . . . . . . . . . 
        . . . . . . . . . . 3 4 d a 3 5 3 a d 4 3 . . . . . . . . . 
        . . . . . . . . . 3 3 4 d d d d d d d 4 3 3 . . . . . . . . 
        . . . . . . . . 3 3 a 4 d f f f f f d 4 a 3 3 3 . . . . . . 
        . . . . . . . . a a a 4 d f f f f f d 4 a a a 3 3 . . . . . 
        . . . . . . . . b 9 6 4 d f 5 f 5 f d 4 6 6 b b b 3 . . . . 
        . . . . . . . . b 6 6 4 d f f f f f d 4 9 6 b b b 3 . . . . 
        . . . . . . . . a a a 4 d f f 5 f f d 4 a a a 3 3 . . . . . 
        . . . . . . . . 3 4 a 4 d f f f f f d 4 a 4 3 . . . . . . . 
        . . . . . . . . 3 4 1 4 d f 5 f 5 f d 4 1 4 3 . . . . . . . 
        . . . . . . . . 3 4 5 4 d f 5 f 5 f d 4 5 4 3 . . . . . . . 
        . . . . . . . . 3 4 1 4 d f 5 5 5 f d 4 1 4 3 . . . . . . . 
        . . . . . . . . 3 4 1 4 d f f f f f d 4 1 4 3 . . . . . . . 
        . . . . . . . . 3 4 5 4 1 1 1 1 1 1 1 4 5 4 3 . . . . . . . 
        . . . . . . . . 3 4 1 4 1 1 1 1 1 1 1 4 1 4 3 . . . . . . . 
        . . . . . . . . 3 4 1 4 1 1 1 1 1 1 1 4 1 4 3 . . . . . . . 
        . . . . . . . . 3 4 5 4 4 4 4 d 4 4 4 4 5 4 3 . . . . . . . 
        . . . . . . . . 3 4 1 4 4 4 d c d 4 4 4 1 4 3 3 . . . . . . 
        . . . . . . . . 4 4 1 4 4 d b a b d 4 4 1 4 4 3 . . . . . . 
        . . . . . . . . 4 5 5 4 4 4 d c d 4 4 4 5 5 4 3 . . . . . . 
        . . . . . . . . 4 5 1 4 4 4 4 d 4 4 4 4 1 5 4 3 . . . . . . 
        . . . . . . . . 4 1 1 4 4 4 4 4 4 4 4 4 1 1 4 3 . . . . . . 
        . . . . . . . . 4 5 5 f 4 4 4 4 4 4 4 f 5 5 4 3 . . . . . . 
        . . . . . . . . 4 1 1 d f 4 4 4 4 4 f d 1 1 4 3 . . . . . . 
        . . . . . . . . 4 1 1 d d f 4 4 4 f d d 1 1 4 3 . . . . . . 
        . . . . . . . . 4 5 5 5 d d f 4 f d d 5 5 5 4 3 . . . . . . 
        . . . . . . . . 4 1 1 1 1 d d 3 d d 1 1 1 1 4 3 . . . . . . 
        . . . . . . . . 3 1 1 1 1 1 f d f 1 1 1 1 1 3 3 . . . . . . 
        . . . . . . . . 3 3 5 5 5 5 5 f 5 5 5 5 5 3 3 . . . . . . . 
        `)
    LookingLeft = 1
    Mr_Weird.startEffect(effects.halo)
    info.startCountdown(30)
    info.changeScoreBy(2000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.stopCountdown()
    info.changeLifeBy(-1)
    Mr_Weird.say("Oof you bumped into yodely! No more power up (if you have one)!", 500)
    Blorbyhelpsyou = 0
    holdingOopsie = 0
    Mr_Weird.setImage(img`
        . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . 
        . . . . . . . . . . . . . b b 5 b b . . . . . . . . . . . . 
        . . . . . . . . . . . d 1 3 3 5 3 3 1 d . . . . . . . . . . 
        . . . . . . . . . . . d 1 3 3 5 3 3 1 d . . . . . . . . . . 
        . . . . . . . . . . . 4 d a 3 5 3 a d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d d d d d d d 4 . . . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . a a 4 d f f f f f d 4 a a . . . . . . . . 
        . . . . . . . . b 3 . 4 d f 5 f 5 f d 4 . 3 b b b 3 . . . . 
        . . . . . . . . b . 3 4 d f f f f f d 4 3 . b b b . 3 . . . 
        . . . . . . . . . a a 4 d f f 5 f f d 4 a a . . . . . . . . 
        . . . . . . . . . . a 4 d f f f f f d 4 a . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f 5 5 5 f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 d f f f f f d 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a a 3 a a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 d b a b d 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 
        . . . . . . . . . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . 
        . . . . . . . . . . . d f 4 4 4 4 4 f d . . . . . . . . . . 
        . . . . . . . . . . . d d f 4 4 4 f d d . . . . . . . . . . 
        . . . . . . . . . . . . d d f 4 f d d . . . . . . . . . . . 
        . . . . . . . . . . . . . d d 3 d d . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f d f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
        `)
    LookingLeft = 1
    info.changeScoreBy(-100)
    Cool_down()
})
let FootWhateverProjectile: Sprite = null
let easyMode = 0
let thean: animation.Animation = null
let Yodely: Sprite = null
let Blorby: Sprite = null
let bossLevel = 0
let Blorbyhelpsyou = 0
let avrage: Sprite = null
let CrackedOopsie: Sprite = null
let LookingLeft = 0
let oopsie: Sprite = null
let holdingCrackedOopsie = 0
let holdingOopsie = 0
let attack: animation.Animation = null
let statusbar: StatusBarSprite = null
let FootWhatever: Sprite = null
let Gravity = 0
let Mr_Weird: Sprite = null
game.showLongText("There was once a weird world. This weird world had fantastic creatures. A villain named Whatever is trying to destroy the world of stuff (the weird world). You are trying to save it. Use the keys w, a, s and d to move. Press the space bar to jump. Hold down the space bar to enter easy mode. Hold down down to crouch. Hold down up to go back to normal.", DialogLayout.Full)
scene.setBackgroundImage(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
scene.setBackgroundColor(1)
Mr_Weird = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . d 3 3 7 7 7 3 3 d . . . . . . . . . . . . . . . . . . 
    . . . 4 d a 3 5 3 a d 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 d d d d d d d 4 . . . . . . . . . . . . . . . . . . 
    . . a 4 d f f f f f d 4 a . . . . . . . . . . . . . . . . . 
    . a a 4 d f f f f f d 4 a a . . . . . . . . . . . . . . . . 
    b . . 4 d f 5 f 5 f d 4 . . b b . . . . . . . . . . . . . . 
    b . . 4 d f f f f f d 4 . . b b . . . . . . . . . . . . . . 
    . a a 4 d f f 5 f f d 4 a a . . . . . . . . . . . . . . . . 
    . . a 4 d f f f f f d 4 a . . . . . . . . . . . . . . . . . 
    . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 d f 5 f 5 f d 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 d f 5 5 5 f d 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 d f f f f f d 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 a a a 3 a a a 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 a a 3 3 3 a a 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 4 d b a b d 4 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 4 4 d c d 4 4 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 d 4 4 4 4 . . . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . 
    . . . f 4 4 4 4 4 4 4 f . . . . . . . . . . . . . . . . . . 
    . . . d f 4 4 4 4 4 f d . . . . . . . . . . . . . . . . . . 
    . . . d d f 4 4 4 f d d . . . . . . . . . . . . . . . . . . 
    . . . . d d f 4 f d d . . . . . . . . . . . . . . . . . . . 
    . . . . . d d 3 d d . . . . . . . . . . . . . . . . . . . . 
    . . . . . . f d f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Mr_Weird, 100, 0)
tiles.setTilemap(tiles.createTilemap(hex`3200320004000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000007070207000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000007070207000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000707020700001200000c00140000000000030200000000000000000000000000000000000000000000000000000000000000070702070000080808080808000000000003020000000000000000000000000000000000000000000000000000000000000007070207000009090909090908000000000302000000000000000000000000000000000000000000000000000000000000000707020700000707070707070a000000060302000000000000000000000000000000000000000000000000000000000000000707020700000000000000000000000507030200000000000000000000000000000e00000000000000000000000000000000070702070000000000000000000005040403020000000000000000000000000000000000000000000000000000000000000007070207000000000000000000050504020302000000000000000000000000000000000000000000000000000000000000000707020700000000000000000505040402030200000000000000000000000000000000000000000000000000000000000000070702070000000000000505050404040203020000000000000000000000000000000000000000000000000000000000000007070207000b000000050505040404040203020000000000000000000000000000000000000000000000000000000000000007070207001500000505040404040404040a000000000014000000000000000000000000000000000000000000000000000007070404040101010101010101010101040303080d090d080d0800000000000000000000000000000000000000000000000007070204010101010101010101010101040303090909090909090000000000000000000000000000000000000000000000000707000000000000000000000000000000000009090909090909140000000000000000000000000000000000000000000000070700000000000000000000000000000000000909040404040404040400000000000000000000000000000000000000000007070000000000000000000000000000000000090909090909090000000000140000000000000000000000000000000000000707000000000000000000000000000000000009090909090909140000000f0f0f0f0f14000000000000000000000000000007070000000000000000000000000000000000090909040404040404040f0f1111110f0f000000000000000000000000000007070000000000000000000000000000000000090909090909090000000f11111111110f000000000000000000000000000007070000000000000000000000000000000000090909090909000000001400001011110f000000000000000000000000001407070000000000000000001400000000000000090909090404040404040f11111111110f000000000000000000000000001307070000000000000000001300000000000000090909090909090000000f0f1111110f0f00000000000000000000000000000707000000000000000000000000000000000009090909090909000000000f0f0f0f0f00000000000000000000000000000007070000000000000000000000000000000000090909090909090000000000000000000000000000000000000000000000000707000000000000000000000000000000000009090909090404040404000000000000000000000000000000000000000000070700000000000000000000000000000000000909090909090900000000000000000000000000000000000000000000000007070000000000000000000000000000000000090909090909090000000000000000000000000000000000000000000000000707000000000000000000000000000000000009090909090909000000000000000000000000000000000000000000000000070700000000000000000000000000000000000909090909090404040404000000000e000000000000000000000000000000070700000000000000000000000000000000000909090909090900000000000000000000000000000000000000000000000007070000000000000000000000000e0000000009090909090909000000000000000000000000000000000000000000000000070700000000000000000000000000000000000909090909090900000000000000000000000000000000000000000000000007070000000000000000000000000000000000090909090909090000000000000000000000000000000000000000000000000707000000000000000000000000000000000009090909090909000000000000000000000000000000000000000000000000070700000000000000000000000000000000000909090909090904040404000000000000000000000000000000000000000007070000000000000000000000000000000000090909090909090101010400000000000000000000000000000000000000000707000000000000000000000000000000000009090909090909010101040000000000000000000000000000000000000000070700000000000000000000000000000000000909090909090901010104000000000000000000000000000000000000000007070000000000000000000000000000000000090909090909090101010400000000000000000000000000000000000000000707000000000000000000000000000000000009090909090909010101040000000000000000000000000000000000000000070700000000000000000000000000000000020909090909090901010104000000000000000000000000000000000000000007070d00000000000000000000000000000202020909090909090101010400000000000000000000000000000000000000000707060000000000000d0000000000000202000202090909090901010104040000001400000000000000000000000000000007070d06140000000d000d00001400020200000909090909090901010101040400001314000000000000000e00000000001407070d0c0606060606060606060606060606060d0d0d0d0d0d0d0d06060606060606060606060606060606060606060c060607070d060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060d06060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . 2 2 2 2 2 2 . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . 2 2 2 2 2 2 2 . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . 2 2 2 2 2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . 2 . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . 2 . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . 2 . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . 2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . 2 . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . . . 2 . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    . 2 . . . . . . . . . . . . . 2 2 2 . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 . 2 2 . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 2 
    . 2 . . . . . . . . . . . 2 2 . . . . . . . . . 2 2 2 2 2 2 . . 2 . . . . . . . . . . . . . . . 2 2 
    2 . 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 
    . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile7,myTiles.tile8,myTiles.tile10,myTiles.tile11,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.hazardLava1,sprites.builtin.brick,sprites.dungeon.hazardLava0,myTiles.tile6,myTiles.tile21,myTiles.tile20,sprites.castle.shrub], TileScale.Sixteen))
scene.cameraFollowSprite(Mr_Weird)
Gravity = 250
Mr_Weird.ay = Gravity
spawn_point()
createBlorby()
info.setLife(10)
YodelyEnimy()
createCrackedOopsie()
info.setScore(0)
game.onUpdateInterval(2000, function () {
    if (bossLevel == 1) {
        FootWhateverProjectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 . . . . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 9 b 9 b 9 9 . . . . . . 
            . . 9 9 b b 9 b b 9 . . . . . . 
            . . 9 9 b b 9 b b 9 9 9 . . . . 
            . . 9 b b b 9 9 b b b 9 9 9 . . 
            . . 9 b b b b 9 b b b b 9 9 . . 
            . . . 9 b b 9 b b b b b 9 . . . 
            . . . 9 b b 9 b b b b 9 9 . . . 
            . . . . 9 9 9 9 b b 9 9 . . . . 
            . . . . 9 9 9 9 9 9 . . . . . . 
            . . . . . . 9 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, FootWhatever, -100, 0)
        FootWhateverProjectile.setKind(SpriteKind.bossProjectile)
    }
})
