// 型は型推論で処理

export const validationRules = {
  name: {
    required: 'ニックネームを入力してください',
    maxLength: { value: 10, message: '10文字以下で入力してください' }
  },
  email: {
    required: 'メールアドレスを入力してください'
  },
  password: {
    required: 'パスワードを入力してください'
  },
  password_confirmation: {
    required: '確認用のパスワードを入力してください'
  }
};
