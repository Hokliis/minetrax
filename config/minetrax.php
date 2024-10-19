<?php

return [
    /*
    |--------------------------------------------------------------------------
    |Enable Powered By Text References
    |--------------------------------------------------------------------------
    |
    | Hide powered by MineTrax references in footer and other places.
    |
    */
    'show_powered_by' => env('SHOW_POWERED_BY', true),

    /*
    |--------------------------------------------------------------------------
    | Show Home Button
    |--------------------------------------------------------------------------
    |
    | hide or show the home button in navbar.
    |
    */
    'show_home_button' => env('SHOW_HOME_BUTTON', false),

    /*
    |--------------------------------------------------------------------------
    | Mark user verified when a player account is linked
    |--------------------------------------------------------------------------
    |
    | If true, this feature automatically mark user's verified_at field when a user link some
    | player account to their profile. This will also automatically mark user not verified when
    | he removes linked player.
    |
    */
    'mark_user_verified_on_account_link' => env('MARK_USER_VERIFYED_ON_ACCOUNT_LINK', true),

    /*
    |--------------------------------------------------------------------------
    | Use player's username for skin instead of uuid
    |--------------------------------------------------------------------------
    |
    | If set to true, minetrax will use player's username to fetch avatar and skins from avatar
    | services like minotar etc instead of uuid.
    |
    */
    'use_username_for_skins' => env('USE_USERNAME_FOR_SKINS', false),

    /*
    |--------------------------------------------------------------------------
    | Interval at which scheduler will sync players from server
    |--------------------------------------------------------------------------
    |
    | This is the interval duration at which web will poll server for new players.
    | Available options: hourly, everyThirtyMinutes, everyFifteenMinutes, everyTenMinutes, everyFiveMinutes,
    | everyTwoHours, everyFourHours, daily, weekly
    |
    | Note: Even though its possible to go below 5 minutes but its highly recommended to not go below that as
    | it might have unexpected behaviors.
    |
    */
    'players_fetcher_cron_interval' => env('PLAYER_FETCHER_CRON_INTERVAL', 'hourly'),

    'fetch_avatar_from_url_using_curl' => env('FETCH_AVATAR_FROM_URL_USING_CURL', false),

    /*
    |--------------------------------------------------------------------------
    | Items which can be chosen to add to navbar
    |--------------------------------------------------------------------------
    |
    | These items can be chosen and added to custom navbar by user from drag and drop interface.
    | Setting > Navigation
    |
    */
    'custom_nav_available_items_array' => [
        [
            'type' => 'dropdown',
            'name' => 'Dropdown',
            'title' => 'Dropdown',
            'key' => 'dropdown',
            'children' => [],
            'authenticated' => false,
        ],
        [
            'type' => 'component',
            'name' => 'App Logo',
            'title' => 'App Logo',
            'component' => 'AppLogoMark',
            'key' => 'component-app-icon',
            'authenticated' => false,
        ],
        [
            'type' => 'component',
            'name' => 'Profile Dropdown',
            'title' => 'Profile Dropdown',
            'component' => 'ProfileDropdown',
            'key' => 'component-user-profile',
            'authenticated' => true,
        ],
        [
            'type' => 'component',
            'name' => 'Search Box',
            'title' => 'Search Box',
            'component' => 'NavbarSearch',
            'key' => 'component-search',
            'authenticated' => false,
        ],
        [
            'type' => 'component',
            'name' => 'Notification Bell',
            'title' => 'Notification Bell',
            'component' => 'NotificationDropdown',
            'key' => 'component-notification-dropdown',
            'authenticated' => true,
        ],
        [
            'type' => 'component',
            'name' => 'Theme Switcher',
            'title' => 'Theme Switcher',
            'component' => 'LightDarkSelector',
            'key' => 'component-theme-switcher',
            'authenticated' => false,
        ],
        [
            'type' => 'component',
            'name' => 'Language Switcher',
            'title' => 'Language Switcher',
            'component' => 'LocaleSelector',
            'key' => 'component-language-switcher',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'Home',
            'title' => 'Home',
            'route' => 'home',
            'key' => 'route-home',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'Statistics',
            'title' => 'Statistics',
            'route' => 'player.index',
            'key' => 'route-stats',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'Polls',
            'title' => 'Polls',
            'route' => 'poll.index',
            'key' => 'route-polls',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'News',
            'title' => 'News',
            'route' => 'news.index',
            'key' => 'route-news',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'Staff Members',
            'title' => 'Staff Members',
            'route' => 'staff.index',
            'key' => 'route-staff-members',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'Login',
            'title' => 'Login',
            'route' => 'login',
            'key' => 'route-login',
            'authenticated' => false,
            'guestonly' => true,
        ],
        [
            'type' => 'route',
            'name' => 'Register',
            'title' => 'Register',
            'route' => 'register',
            'key' => 'route-register',
            'authenticated' => false,
            'guestonly' => true,
        ],
        [
            'type' => 'route',
            'name' => 'Edit Profile',
            'title' => 'Edit Profile',
            'route' => 'profile.show',
            'key' => 'route-edit-profile',
            'authenticated' => true,
        ],
        [
            'type' => 'route',
            'name' => 'Linked Players',
            'title' => 'Linked Players',
            'route' => 'linked-player.list',
            'key' => 'route-linked-players',
            'authenticated' => true,
        ],
        [
            'type' => 'route',
            'name' => 'Features',
            'title' => 'Features',
            'route' => 'features.list',
            'key' => 'route-features',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'Downloads',
            'title' => 'Downloads',
            'route' => 'download.index',
            'key' => 'route-downloads',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'Custom Forms',
            'title' => 'Forms',
            'route' => 'custom-form.index',
            'key' => 'route-custom-forms',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'Applications',
            'title' => 'Applications',
            'route' => 'recruitment.index',
            'key' => 'route-applications',
            'authenticated' => false,
        ],
        [
            'type' => 'route',
            'name' => 'My Application Requests',
            'title' => 'My Application Requests',
            'route' => 'recruitment-submission.index',
            'key' => 'route-recruitment-submission',
            'authenticated' => true,
        ],
        [
            'type' => 'route',
            'name' => 'Change Player Skin',
            'title' => 'Change Player Skin',
            'route' => 'change-player-skin.show',
            'key' => 'route-change-player-skin',
            'authenticated' => true,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | AskDB Feature Enabled
    |--------------------------------------------------------------------------
    |
    | If enabled, staff who have permission `use ask_db`, will be able to ask questions to database and get answers.
    |
    */
    'askdb_enabled' => env('ASKDB_ENABLED', false) && env('OPENAI_API_KEY'),

    /*
    |--------------------------------------------------------------------------
    | OpenAI AI Model
    |--------------------------------------------------------------------------
    |
    | Name of the AI model to use for OpenAI query. Currently OpenAI models are supported.
    | Eg: gpt-4o, gpt-4o-mini.
    |
    */
    'openai_ai_model' => env('OPENAI_AI_MODEL', 'gpt-4o-mini'),

    /*
    |--------------------------------------------------------------------------
    | Cookie Consent Enabled
    |--------------------------------------------------------------------------
    |
    | If enabled, cookie consent will be shown to users for GDPR compliance.
    |
    */
    'cookie_consent_enabled' => env('COOKIE_CONSENT_ENABLED', true),

    /*
    |--------------------------------------------------------------------------
    | Powered By Extra
    |--------------------------------------------------------------------------
    |
    | If added, extra name and link will appear with powered by in footer.
    | Helpful to show your name if you are a hosting provider or theme developer.
    |
    */
    'powered_by_extra_name' => env('POWERED_BY_EXTRA_NAME', null),
    'powered_by_extra_link' => env('POWERED_BY_EXTRA_LINK', null),

    /*
    |--------------------------------------------------------------------------
    | Query/Ping Proxy Server using IP Instead.
    |--------------------------------------------------------------------------
    |
    | By default the PING uses hostname when server is bungee.
    | By default the QUERY uses ip address when server is bungee.
    |
    | Change accordingly in .env to use hostname or ip as per requirement.
    */
    'ping_proxy_server_using_ip_address' => env('PING_PROXY_SERVER_USING_IP_ADDRESS', false),
    'query_proxy_server_using_ip_address' => env('QUERY_PROXY_SERVER_USING_IP_ADDRESS', true),

    /*
    |--------------------------------------------------------------------------
    | Downloads Module Disk
    |--------------------------------------------------------------------------
    |
    | Disk to use to store all files of Downloads Module.
    |
    */
    'downloads_module_disk' => env('DOWNLOADS_MODULE_DISK', 'download'),

    'ratelimit' => [
        'api' => env('RATELIMIT_API_PER_MINUTE', 600),
    ],

    /*
    |--------------------------------------------------------------------------
    | Max Post Feed Media Size (KB)
    |--------------------------------------------------------------------------
    |
    | Maximum allowed size post feed media in kilobytes.
    |
    */
    'max_post_feed_media_size_kb' => env('MAX_POST_FEED_MEDIA_SIZE_KB', 1024),

    /*
    |--------------------------------------------------------------------------
    | Enable Skin Changer Feature.
    |--------------------------------------------------------------------------
    |
    | This feature allows users to change their skins of linked players.
    | Will work for those servers which have 'Enable Skin Changed` toggled on.
    | This feature will only work if SkinsRestorer plugin is installed on server.
    |
    */
    'player_skin_changer_enabled' => env('PLAYER_SKIN_CHANGER_ENABLED', true),

    /*
    |--------------------------------------------------------------------------
    | Cooldown in seconds for skin change.
    |--------------------------------------------------------------------------
    |
    | Cooldown in seconds to wait before changing skin again. (per user)
    |
    */
    'player_skin_changer_cooldown_in_seconds' => env('PLAYER_SKIN_CHANGER_COOLDOWN_IN_SECONDS', 60),

    /*
    |--------------------------------------------------------------------------
    | Hide Country of Player and User everywhere
    |--------------------------------------------------------------------------
    |
    | If enabled, hide country of player and user everywhere in side.
    |
    */
    'hide_country_for_privacy' => env('HIDE_COUNTRY_FOR_PRIVACY', false),

    /*
    |--------------------------------------------------------------------------
    | Disable Player Unlinking
    |--------------------------------------------------------------------------
    |
    | Don't allow users to unlink their player accounts.
    |
    */
    'disable_player_unlinking' => env('DISABLE_PLAYER_UNLINKING', false),


    /*
    |--------------------------------------------------------------------------
    | Hide Next Rank of Player.
    |--------------------------------------------------------------------------
    |
    | If enabled, next rank of player won't be shown in player profile.
    |
    */
    'hide_player_next_rank' => env('HIDE_PLAYER_NEXT_RANK', false),


    /*
    |--------------------------------------------------------------------------
    | BanWarden AI Insights Enabled
    |--------------------------------------------------------------------------
    |
    | If enabled, BanWarden will use AI to generate insights for punishments.
    |
    */
    'banwarden_ai_insights_enabled' => env('BANWARDEN_AI_INSIGHTS_ENABLED', true) && env('OPENAI_API_KEY'),
];
