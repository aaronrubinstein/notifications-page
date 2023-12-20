import { writable } from "svelte/store";

export const data = writable([
    {
        id: 1,
        unread: true,
        user: 'Mark Webber',
        avatar: 'images/avatar-mark-webber.webp',
        action: 'reacted to your recent post',
        subject: 'My first tournament today!',
        group: null,
        message: null,
        image: null,
        age: '1m ago'
    },
    {
        id: 2,
        unread: true,
        user: 'Angela Gray',
        avatar: 'images/avatar-angela-gray.webp',
        action: 'followed you',
        subject: null,
        group: null,
        message: null,
        image: null,
        age: '5m ago'
    },
    {
        id: 3,
        unread: true,
        user: 'Jacob Thompson',
        avatar: 'images/avatar-jacob-thompson.webp',
        action: 'has joined your group',
        subject: null,
        group: 'Chess Club',
        message: null,
        image: null,
        age: '1 day ago'
    },
    {
        id: 4,
        unread: false,
        user: 'Rizky Hasanuddin',
        avatar: 'images/avatar-rizky-hasanuddin.webp',
        action: 'sent you a private message',
        subject: null,
        group: null,
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        image: null,
        age: '5 days ago'
    },
    {
        id: 5,
        unread: false,
        user: 'Kimberly Smith',
        avatar: 'images/avatar-kimberly-smith.webp',
        action: 'commented on your picture',
        subject: null,
        group: null,
        message: null,
        image: 'images/image-chess.webp',
        age: '1 week ago'
    },
    {
        id: 6,
        unread: false,
        user: 'Nathan Peterson',
        avatar: 'images/avatar-nathan-peterson.webp',
        action: 'reacted to your recent post',
        subject: '5 end-game strategies to increase your win rate',
        group: null,
        message: null,
        image: null,
        age: '2 weeks ago'
    },
    {
        id: 7,
        unread: false,
        user: 'Anna Kim',
        avatar: 'images/avatar-anna-kim.webp',
        action: 'left the group',
        subject: null,
        group: 'Chess Club',
        message: null,
        image: null,
        age: '2 weeks ago'
    }
]);