import sidebar from './sidebar'
import {DefaultTheme, LocaleSpecificConfig} from "vitepress";

const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    titleTemplate: ':title — хендбук',
    description: 'Карманное руководство разработчика Телеграм-ботов. Фичи и приёмы',
    head: [

    ],
    themeConfig: {
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Наверх',
        darkModeSwitchLabel: 'Тёмная тема',
        outline: {
            level: 'deep',
            label: 'На этой странице'
        },
        docFooter: {
            prev: 'Назад',
            next: 'Вперёд',
        },
        nav: [
            {text: 'Встречайте Papercraft 🎉', link: ''},
            {text: 'Book', link: '/ru/book/', activeMatch: '/ru/book/.*'},
            {text: 'Framework', link: '/en/framework/', activeMatch: '/ru/framework/.*'},
            {text: 'TGPy', link: '/en/tgpy/', activeMatch: '/ru/tgpy/.*'},
        ],
        editLink: {
            pattern: 'https://github.com/tm-a-t/papercraft/edit/main/:path',
            text: 'Изменить страницу на Гитхабе',
        },
        lastUpdated: {
            text: 'Обновлено',
            formatOptions: {
                // @ts-ignore
                dateStyle: 'long',
                forceLocale: true,
            },
        },
        sidebar: sidebar,
    },
}

export default ruConfig
