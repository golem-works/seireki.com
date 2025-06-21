# 西暦 ⇔ 元号 変換ツール

## 🧩 概要
日本の和暦（明治・大正・昭和・平成・令和）と西暦を相互に変換するWebツールです。

ユーザーが「元号＋年数」または「西暦」を入力することで、それに対応する形式へ即時変換を行います。

---

## 🔗 公開URL
[Vercelデプロイ先](https://seireki-dm9e10iog-kouichis-projects.vercel.app/)

---

## 🖥 使用技術
- Next.js（Reactベースのフレームワーク）
- TypeScript
- CSS（Tailwind風のミニマルデザイン）
- Vercel（デプロイ）

---

## ✨ 特徴
- 年号と西暦の双方向変換に対応
- 入力に応じてリアルタイムで変換結果を表示
- 日本文化に馴染むシンプルなUI
- エラーハンドリングあり（入力の誤りにも対応）

---

## 📦 ローカル実行手順

```bash
git clone https://github.com/golem-works/new.urbenlegend.git
cd seireki-converter
npm install
npm run dev
