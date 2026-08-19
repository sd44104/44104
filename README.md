# SBOARD 배포
- student.html: 학생 앱
- admin.html: 관리자 ERP
- dashboard.html: 교실 현황판/전자칠판용 별도 화면
- api/generate.js: Vercel AI API

## dashboard.html 배치
같은 GitHub/Vercel 프로젝트 루트에 두고 `/dashboard.html`로 사용하세요. 즉 student.html과 admin.html의 대체물이 아니라 **세 번째 독립 화면**입니다. 교실 TV/전자칠판에서는 `/dashboard.html`을 열어두는 방식입니다.

## Vercel
Project Settings → Environment Variables에 OPENAI_API_KEY와 OPENAI_MODEL을 추가하세요. `.env.example`은 예시이며 실제 키는 GitHub에 올리지 마세요.

## 관리자 확장
admin.html에 학생/학적 관리, 출석부 과목 관리, AI HUB 관리가 추가되었습니다. 전학은 번호를 유지한 채 transferred 상태로 바꾸고, 전입생은 35번부터 최대번호+1로 생성됩니다.
