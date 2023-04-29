export interface IUIMenu {
    id: number
    title: string
    link: string
}

export interface IUIMenuMain extends IUIMenu {
    addClass: string
}

export interface IUIMenuData {
    doubleColumn: {
        title: string
        items: IUIMenu[]
    },
    singleColumn: {
        title: string
        items: IUIMenu[]
    }[],
    sideContent: IUIMenu[]
}

export interface IUIMenuTVPlus {
    title: string,
    data: {
        poster: string,
        link: string,
        titleBroadcast?: string,
        timeBroadcast?: string,
        typeBroadcast?: string,
    }[]
}