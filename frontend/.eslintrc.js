module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  // npmを通して外部に公開されているルールのpluginsをインストールできる。ただし、外部ルールを読み込むところまでする（ルールの適用・有用化はpluginsではしない）
  // pluginsに記述する際は、あらかじめnpmで関係パッケージをインストールする必要がある。
  plugins: [
    "react", // eslint-plugin-reactパッケージを意味する
    "react-hooks", // eslint-plugin-react-hooksパッケージを意味する
    "@typescript-eslint", // @typescript-eslint/eslint-pluginパッケージを意味する
    "import", // eslint-plugin-importを追加
    "unused-imports", // 追加 使っていないimportを自動で削除用
  ],
  // extendsルール設定を拡張してくれる共有設定（外部の設定ファイルを読み込んでくれる）
  // pluginとの違いは、pluginは拡張ルールを読み込んだだけで、どのルール設定を適用させるか指定するものではない。extendsはどのルールを適用するかを決める
  // 上から順にルールが上書きされるので注意
  extends: [
    "plugin:react/recommended", // Reactの構文チェック。eslint-plugin-reactのパッケージ
    "airbnb", // airbnbスタイルコード構文チェック
    "airbnb-typescript",
    "airbnb/hooks", // React hooks構文チェック
    "plugin:@typescript-eslint/recommended", // 型チェックが不要なルールを適用。@typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // 型チェックが必要なルールを適用
    "prettier", // 追加 ESLintの情報に沿ってフォーマット
  ],
  // parserは、ESLintがプログラムの構文解析してくれる時に使われる。
  parser: "@typescript-eslint/parser", // ESLintにTypescriptを理解させる
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["build"], // 追加 .eslintignoreに対象外にしているが無いとコンパイルに時間がかかる
  // rulesは個別の解析ルールを設定する（ルールのレベル off,warn,error）
  rules: {
    "react-hooks/exhaustive-deps": "off", // react-hooksでの依存配列チェック機能をoff
    "@typescript-eslint/no-unsafe-assignment": "off", // any型の割り当てを許可
    "@typescript-eslint/no-unsafe-member-access": "off", // any型へのアクセスを許可
    "@typescript-eslint/no-use-before-define": "error", // typescript側のno-use-before-defineを使うようにする
    "import/prefer-default-export": "off", // named exportがエラーになるので使えるようにoff
    "@typescript-eslint/no-unused-vars": "off", // unused-importsを使うため削除
    "unused-imports/no-unused-imports": "error", // 不要なimportの削除
    "unused-imports/no-unused-vars": [
      // unused-importsでno-unused-varsのルールを再定義
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react/function-component-definition": [
      // アロー関数以外受け付けない設定
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-param-reassign": ["error", { props: false }], // パラメーターのプロパティ変更を許可
    "import/extensions": [
      // importのときに以下の拡張子を記述しなくてもエラーにしない。import foo from './foo';はOK
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      // ファイル拡張子が.jsx、.tsx以外のファイルでJSXを使用した場合にエラーを発生させる。
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": "off", // import React from 'react'が無くてもエラーを無くす
    "react/prop-types": "off", // TypeScriptでチェックしているから不要。offにする
    "no-void": [
      // void演算子の許可
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "react/jsx-no-useless-fragment": "off", // react.Fragmentがなくてもエラーを吐かない
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  settings: {
    "import/resolver": {
      // importするファイルをjsだけではなく、tsを含むファイルを許可する
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
      typescript: {
        project: "./",
        alwaysTryTypes: true,
      },
    },
  },
};
