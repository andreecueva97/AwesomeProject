

	self assertStateOfASlot: (aBoard slotNumber: 10) equals: NormalState.

    { #category : #assertions }
GameTest >> assertStateOfASlot: aSlot equals: aState [
	self assert: ((aSlot state) isKindOf: aState) equals: true.
]
--------------------------------------------------------------------------> BOARDSLOT

{ #category : #accessing }
BoardSlot >> state [
	^ state
]

Aslot state isKindOf aState     es un METODO DE SMALLTALK (es una especie de ..)

--------------------------------------------------------------------------> NormalState






































self assertNumberOfCardsAffectingASlot: (aBoard slotNumber: 10) in: game equals: 0.

{ #category : #assertions }
GameTest >> assertNumberOfCardsAffectingASlot: aSlot in: aGame equals: aNumber [
	self assert: (aGame numberOfCardsAffectingASlot: aSlot) equals: aNumber
]


========================================================================>    game
{ #category : #calculations }
Game >> numberOfCardsAffectingASlot: aSlot [
	^ managerOfCardsActive numberOfCardsAffectingASlot: aSlot
]

========================================================================>  ManagerOfTheCardsActiveInGame 
{ #category : #utilities }
ManagerOfTheCardsActiveInGame >> numberOfCardsAffectingASlot: aSlot [
	managersOfCardsAffectingASlot
		detect: [ :aManagerOfCardsAffectingASlot | aManagerOfCardsAffectingASlot slot == aSlot ]
		ifFound: [ :aManagerOfCardsAffectingASlot | ^ aManagerOfCardsAffectingASlot cardsAffectingTheSlot size ]
]







agregar mensajes a ORDINARYSTATE Y DISTERDSTATE

used bblabla cada square lo delega a ORDINARYSTATE O DISTERDSTATE


aBoard := Board
		ofASlotDistribution:
			{SpeedUp createSlot.     llama a STATE PARA QUE HAGA SU TRABAJO                      ok
			NoEffect createSlot.          llama a STATE PARA QUE HAGA SU TRABAJO                 ok
			(MoonWalk createSlotWithN: 2).  llama a STATE PARA QUE HAGA SU TRABAJO               ok
			AtomicBomb createSlot.          llama a STATE PARA QUE HAGA SU TRABAJO              ok
			CardGiver createSlot.  drakcard    llama a STATE PARA QUE HAGA SU TRABAJO              ok
			WormHole createSlot.               llama a STATE PARA QUE HAGA SU TRABAJO                   ok
//////////////////////////////////
                   SpeedUp createSlot.     llama a STATE PARA QUE HAGA SU TRABAJO                 ok
SpeedUp >> applyEffectTo: aPlayer from: game [
	state applySpeedUpEffectTo: aPlayer from: game
]
{ #category : #initialization }
SpeedUp >> initializeSlot [
	state := NormalState new.
	twoStates := true.
]
                  NoEffect createSlot.          llama a STATE PARA QUE HAGA SU TRABAJ             ok
NoEffect >> applyEffectTo: aPlayer from: game [
	state applyNoEffectEffectTo: aPlayer from: game
]
                	(MoonWalk createSlotWithN: 2).  llama a STATE PARA QUE HAGA SU TRABAJO        ok
{ #category : #playing }
MoonWalk >> applyEffectTo: aPlayer from: game [
	state applyMoonWalkEffectTo: aPlayer from: game withN: n
]
{ #category : #initialization }
MoonWalk >> initializeWithN: anNumber [
	n := anNumber.
	state := NormalState new.
	twoStates := true.
]    
                	AtomicBomb createSlot.          llama a STATE PARA QUE HAGA SU TRABAJO        ok
AtomicBomb >> applyEffectTo: aPlayer from: game [
	state applyAtomicBombEffectTo: aPlayer from: game\\\


                    	CardGiver createSlot.  drakcard    llama a STATE PARA QUE HAGA SU TRABAJO    ok
CardGiver >> applyEffectTo: aPlayer from: game [
	state applyCardGiverEffectTo: aPlayer from: game.
]
    
                       WormHole createSlot.               llama a STATE PARA QUE HAGA SU TRABAJO     ok
WormHole >> applyEffectTo: aPlayer from: game [
	state applyWormHoleEffectTo: aPlayer from:game 
]

{ #category : #initialization }
WormHole >> initializeSlot [
	state := NormalState new.
	twoStates := true.
]






falta aplicar esto a INVERTSTATE     test    | mensajes creados FALTA MODIFICARLOS


{ #category : #playing }                                                                              ok
InvertedState >> applyMoonWalkEffectTo: aPlayer from: game withN: n [
	game moveEveryPlayerButThePlayer: aPlayer aNumberOfSlotsEqualTo: n * -1.
]

{ #category : #playing }                                                                             ok
InvertedState >> applySpeedUpEffectTo: aPlayer from: game [
	game move: aPlayer ANumberOfSlotsEqualTo: -4
]

{ #category : #playing }
InvertedState >> applyWormHoleEffectTo: aPlayer from: game [
	game move: aPlayer ANumberOfSlotsEqualTo: 4
]


test MOONWALK ok

test SPEEDUP  ok

test WORMHOLE ok

test ATOMIC BOMB no era necesario pero aplicado    ok

test NOEFFECT    no era necesario pero aplicado    ok

test 