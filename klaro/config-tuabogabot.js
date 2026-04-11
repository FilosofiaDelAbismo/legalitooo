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
        },
        pt: {
            consentNotice: {
                description: 'Utilizamos analítica anónima e um assistente jurídico virtual. Pode aceitar, rejeitar ou personalizar.',
            },
            acceptAll: 'Aceitar tudo',
            declineAll: 'Rejeitar tudo',
            save: 'Guardar preferências',
            consentModal: { title: 'Preferências de cookies' },
        }
    },
    services: [
        {
            name: 'plausible',
            title: 'Plausible Analytics',
            description: 'Analítica web anónima. No usa cookies ni recopila datos personales. / Análise web anónima. Sem cookies nem dados pessoais.',
            purposes: ['analytics'],
            default: true,
        },
        {
            name: 'digiprompts-chat',
            title: 'Chatbot TuAbogaBot',
            description: 'Asistente legal virtual. Puede usar cookies de sesión. / Assistente jurídico virtual. Pode usar cookies de sessão.',
            purposes: ['functional'],
            default: false,
        }
    ]
};
