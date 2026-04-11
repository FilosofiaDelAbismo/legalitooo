var klaroConfig = {
    version: 1,
    lang: 'es',
    privacyPolicy: '/politica-cookies.html',
    translations: {
        es: {
            consentNotice: {
                description: 'Usamos analítica anónima y un asistente legal virtual. Puedes aceptar, rechazar o personalizar.',
            },
            acceptAll: 'Aceptar todo',
            declineAll: 'Rechazar todo',
            save: 'Guardar preferencias',
            consentModal: { title: 'Preferencias de cookies' },
        }
    },
    services: [
        {
            name: 'plausible',
            title: 'Plausible Analytics',
            description: 'Analítica web anónima. No usa cookies ni recopila datos personales.',
            purposes: ['analytics'],
            default: true,
        },
        {
            name: 'digiprompts-chat',
            title: 'Chatbot TuAbogaBot',
            description: 'Asistente legal virtual. Puede usar cookies de sesión para mantener la conversación.',
            purposes: ['functional'],
            default: false,
        }
    ]
};
