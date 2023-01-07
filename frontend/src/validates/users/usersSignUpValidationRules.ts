// ライブラリ import
import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('名前を入力してください'),
  email: yup.string().email('メールアドレス形式で入力してください').required('メールアドレスを入力してください'),
  password: yup
    .string()
    .required('パスワードを入力してください')
    .min(6, '６文字以上で入力してください')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/, '英字、数値及び記号が最低１文字必要'),
  password_confirmation: yup.string().required('確認用のパスワードを入力してください')
});
