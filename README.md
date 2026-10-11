# 박정은 개인 대표 홈페이지

QA 정체성, 한화비전 SQA·SQE 경력 요약, 주요 프로젝트와 기존 공개 연락처를 소개하는 개인 대표 홈페이지입니다. My Health Log의 검증 과정과 근거는 별도 QA 포트폴리오에서 제공합니다.

## 배포 주소

https://mydunalove-sena.github.io/

## 제작 목적

- 한화비전 SQA·SQE 경력 소개
- 기능 검증, 호환성 검증, 결함 재현 경험 정리
- 유앤아이컴퓨넷 운영지원 경험을 포함한 전체 공개 경력 보존
- QA 포트폴리오와 웹사이트 프로젝트 연결
- GitHub를 활용한 프로젝트 파일 및 수정 이력 관리

## 주요 구성

상단 메뉴는 소개·역량·경력·프로젝트이며, 선택한 영역만 표시합니다. 처음에는 소개가 열립니다. 기존 해시 주소와 브라우저 뒤로 가기를 유지합니다. `section-navigation.js`가 화면 전환을 담당하며, JavaScript가 없으면 전체 내용을 읽을 수 있습니다.

### Home

QA 경력과 주요 검증 경험을 간단하게 소개합니다.

### About

사용자 관점에서 문제를 찾고 끝까지 검증하는 QA 정체성을 요약합니다.

### Experience

한화비전 SQA·SQE와 유앤아이컴퓨넷의 공개 경력 기간 및 업무 내용을 제공합니다.

- 한화비전 SQE
- 한화비전 SQA
- 유앤아이컴퓨넷

### Work

AI 카메라 성능 평가, NVR-CAM 호환성 검증, 결함 재현 및 이슈 공유, My Health Log의 공개 프로젝트 내용을 제공합니다. My Health Log에서 QA 검증 사례 상세로 직접 연결하며 기존 실기기 화면 확대와 웹 프로젝트 링크도 보존합니다.

- My Health Log 검증 사례
- 쵸코네일 홈페이지
- 박정은 개인 대표 홈페이지

### Contact

각 메뉴 하단에 기존 이메일과 GitHub 링크를 제공합니다. 모바일에서는 번호를 문구에 표시하지 않는 ‘전화하기’ 버튼을 함께 제공합니다. 상단 연락 메뉴는 제거했으며 기존 `#contact` 주소에서는 중앙 정렬 연락 카드를 보여줍니다.

### Skills

테스트 결과 판단, 기능 검증, 회귀 테스트, 결함 재현, 테스트 환경 관리, 문서화 및 공유를 제공합니다. Watson 보조 도구 경험은 기존 공개 범위인 약 3개월의 간단한 스크립트 작성·실행, 기본 경로 수정, 결과 확인으로 표시합니다.

About·Skills·Career·Projects 전체 내용은 기존 공개 QA 페이지의 원문을 대표 사이트로 복원했으며, 현재 남색·청록·연한 카드 스타일은 restored-profile.css에서 제공합니다.

- 이메일
- QA 포트폴리오
- GitHub 작업 기록

대표 프로젝트의 My Health Log 미리보기와 실기기 화면 다섯 개는 사용자가 공개를 승인한 Android 원본 캡처입니다. 홈·오늘의 복약·검사 결과·통계·데이터 관리 화면을 같은 비율로 표시하며, 확대·화살표 이동·Escape 닫기를 지원합니다. Choco Nail V1·V2·V3 카드는 별도로 유지합니다.

## 사용 기술 및 도구

- HTML
- CSS
- Git
- GitHub
- GitHub Pages
- Visual Studio Code
- AI 도구

## 담당 범위

- 홈페이지 목적과 메뉴 구조 기획
- 경력 및 프로젝트 문구 정리
- HTML 기본 구조 작성
- CSS 화면 구성 및 반응형 적용
- PC·모바일 화면 검수
- 메뉴, 버튼, 외부 링크 동작 확인
- Git을 활용한 변경 이력 관리
- GitHub Pages 배포

## 파일 구성

```text
.
├── index.html
├── style.css
├── 02_home_copy.md
├── 03_about_copy.md
├── 04_experience_copy.md
├── 05_work_copy.md
├── 06_site_structure_plan.md
├── 07_contact_copy.md
├── 08_visual_direction_plan.md
└── README.md
