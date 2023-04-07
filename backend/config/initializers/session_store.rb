# HACK: 条件分岐改善の余地あり
Rails.application.config.session_store :cookie_store, key: '_auth_api_session', expire_after: 1.hour