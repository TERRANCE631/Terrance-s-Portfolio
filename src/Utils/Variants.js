export const fadeInLeft ={
    hidden:{
        x: -50,
        opacity: 0,
    },
    visible:{
        x: 0,
        opacity: 1,

        transition:{
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInRight ={
    hidden:{
        x: 50,
        opacity: 0,
    },
    visible:{
        x: 0,
        opacity: 1,

        transition:{
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInTop ={
    hidden:{
        y: -50,
        opacity: 0,
    },
    visible:{
        y:0,
        opacity: 1,
        transition:{
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInBottom ={
    hidden:{
        y: 50,
        opacity: 0,
    },
    visible:{
        y:0,
        opacity: 1,
        transition:{
            type: 'tween',
            duration: 1,
        }
    }
}