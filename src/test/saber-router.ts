import { useRoute, dispatch } from '../core/router'

export function test_saber_router() {}

useRoute('/', () => alert('/'))
useRoute('/home', () => alert('/home'))
useRoute('/home/test', () => alert('/home/test'))
useRoute('/project', () => alert('/project'))
useRoute('/about', () => alert('/about'))
;(<any>window).goto = url => dispatch(url)
