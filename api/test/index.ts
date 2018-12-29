

import { Router } from 'express'
import { TestController } from './test.controller'
import { IndexRoute } from '../../util/IndexRoute'

const router = Router()

router.use(IndexRoute.reqInfo)

// 테스트
const ctrl: TestController = new TestController()

// 검색
router.get('/'                     , ctrl.retrieve)

// 상세 조회
router.get('/:id'                  , ctrl.find)

// 등록
router.post('/'                    , ctrl.create)

// 수정
router.put('/:id'                  , ctrl.modify)

// 삭제
router.delete('/:id'               , ctrl.remove)

export = router
