# Buttons in Telegram Bots 

There are two types of buttons that bots can show when sending messages: 
_inline buttons_ appear below the sent message and _keyboard buttons_ are suggestions that users see 
near the message input.

Both kinds of buttons may be shown in multiple rows of multiple buttons. 
You can read more about button layouts in the bottom of this page.

## Inline buttons { #inline }

Inline buttons are shown together with the messages.

### Callback button

A callback button is simply a button that sends [an update](../dev/updates) to the bot when pressed.
The bot can handle it in any way.

When a user clicks a callback button, the bot can show a notification or an alert (see the video below.)
Generally, the bot should edit a message or react in any other way to provide some visual feedback to the user.
Until it does, the button will show "loading" animation.

When receiving the updates, the program can identify the pressed button by a special parameter which is specified 
when creating the button.

<video controls loop muted preload="auto">
<source src="/pictures/ru/callback-buttons.webm" type="video/mp4">
</video>

### URL button

A URL button acts like a link.

In Bot API, such button turns into a [user mention](./markup#mention) button if you specify `tg://user?ID=123456789` 
as the URL. In Telegram API, user mention button is built in a separate way.

![Link below the message](/pictures/ru/url-button.png)

### Switch-to-inline button

A switch-to-inline button opens [bot inline mode](../interaction/inline). You can choose whether this button 
will open inline mode in the same chat or open a chat selection dialog first. You can also choose the text query which 
will show next to the bot's username after the button is clicked (the user may change it afterwards.)

<video controls loop muted preload="auto">
<source src="/pictures/ru/switch-inline-button.webm" type="video/mp4">
</video>

### Request peer button

A request peer button allows the user to send a bit of info about any of their chats. 
When clicked, it shows a chat selection dialog.

You can configure this button flexibly: for example, the chat selection may include only channels with usernames or groups 
where the user is an admin.

### Other inline butons

There are more, rather uncommon, buttons:

- Callback game button. Opens an [HTML game](../interaction/html-games).
- Pay button. Used for [integrated payments](../interaction/payments).
- Web view button. Opens [bot web interface](../interaction/mini-apps).
- Login URL button. Used for authorization on sites;
  for example, official [@discussbot](https://t.me/discussbot) utilized it before Telegram introduced native comments.
  The button works similarly to [Telegram Login Widget](../interaction/login-widget) but doesn't require to enter 
  the phone number and confirm the authorization.

## Keyboard buttons

Unlike inline buttons, keyboard buttons are shown below the message input field
(in web versions they are expanded by clicking on ⌘). When pressing a keyboard button, the user simply sends its text.

In Telegram mobile apps, keyboard buttons replace the keyboard; but the user is able to hide them and see 
the regular keyboard again.

<video controls loop muted preload="auto">
<source src="/pictures/ru/keyboard-buttons.webm" type="video/mp4">
</video>

Apart from sending the text, a keyboard button may do one of the following:

- Ask the account phone number.
- Ask the user's geolocation.
- Open a poll creation menu.

Of course, these actions require confirmation from the user.

There is a "resize keyboard" option which determines whether the button keyboard should have flexible height.
For some reason it is off by default, so the buttons look stretched:

![](/pictures/ru/wide-buttons.png)

Keyboard buttons can be shown only with sending a message. 
A bot can send keyboard buttons that will hide (but not disappear) after use.

In groups, keyboard buttons are visible to all members by default. Alternatively, a bot can show 
a set of buttons only to mentioned users, that are:

- The ones whose usernames are included in the message text.
- The sender of the message to which the bot is replying.

## Button layouts

Both inline buttons and keyboard buttons may be aligned in multiple rows.
A row may contain up to 8 buttons. The total limit of buttons shown at once is 100.

::: tip

If you place multiple buttons in a row, you should make sure that their labels look OK in the mobile apps: 
the long labels get truncated.

:::
