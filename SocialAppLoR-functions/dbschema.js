let db = {
    users: [
        {
            userId: 'yzxbnWN2fIc841rbOqmi8WEhwcB2',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2020-05-15T14:23:43.430Z',
            bio: 'Hello my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'Lyon, FR'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-05-15T08:47:14.280Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: '',
            body: 'nice one mate',
            createdAt: '2020-05-15T08:47:14.280Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: '9fHsi3pKm0x95hWNIzDR',
            type: 'like | comment',
            createdAt: '2020-05-17T08:47:14.280Z'
        }
    ]
};

const userDetails = {
    credentials: {
        userId: 'N34KJ5H43KJHREW4J5H3JWMERHB',
        email: 'user@email.com',
        handle:'user',
        createdAt: '2020-05-15T14:23:43.430Z',
        imageUrl: 'image/path/path',
        bio: 'Hello my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Lyon, FR'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: '9fHsi3pKm0x95hWNIzDR'
        },
        {
            userHandle: 'user',
            screamId: 'apxqRtpEK7ykG3afYjMd'
        }
    ]
}