enum Gate {
    //% block="Ouvrir"
    CW = 0,
    //% block="Fermer"
    CCW = 1,
    //% block="Arrêter"
    Stop,
}

enum State {
    //% block="Activer"
    ON, 
    //% block="Désactiver"
    OFF,
}

enum ButtonLocation{
    //% block="Extérieur"
    Ext,
    //% block="Intérieur"
    Int,
}

enum Modules{
    //%block="Capteur de fin de course ouverture"
    LimSwitchO,
    //%block="Capteur de fin de course fermeture"
    LimSwitchC,
    //%block="Bouton poussoir Extérieur"
    BPExt,
    //%block="Bouton poussoir Intérieur"
    BPInt,
    //%block="Signal Lumineux"
    LED,
    //%block="Moteur A1"
    A1Motor,
    //%block="Moteur A2"
    A2Motor,
    //%block="Récepteur IR"
    IRreceptor,
}

enum LimitSwitch{
    //%block="Ouverture"
    Open,
    //%block="Fermeture"
    Closed,
}


enum IO {
    C0 = 0,
    C1,
    C2,
    C3,
    C4,
    C5
}


enum GPIOState {
    //% block="LOW"
    Low = 0,
    //% block="HIGH"
    High = 1
}