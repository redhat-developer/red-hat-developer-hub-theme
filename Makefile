.PHONY: init
init:
	git submodule init
	if [ ! -d "node_modules" ]; then npm install; fi

.PHONY: pack
pack:
	rm -rf dist *.tgz
	npm run build
	npm pack
	tar -tzf *mui-themes*.tgz

.PHONY: publish
publish:
	rm -rf dist
	npm run build
	npm publish --access=public

.PHONY: update-backstage-latest-stable
update-backstage-latest-stable:
	cd backstage && git tag --sort=taggerdate | grep -E '^v1\.[0-9]+\.[0-9]+$$' | tail -n 1 | xargs git checkout
	if [ ! -d "node_modules" ]; then npm install; fi
	npm install --save-dev --force @backstage/core-plugin-api @backstage/test-utils @backstage/plugin-search-react @backstage/theme @backstage/plugin-catalog-react @backstage/plugin-home-react @backstage/plugin-azure-devops-common @backstage/plugin-home @backstage/plugin-search @backstage/plugin-microsoft-calendar @backstage/plugin-stack-overflow @backstage/plugin-gcalendar @material-ui/lab material-ui-popup-state @react-hookz/web @material-table/core humanize-duration @rjsf/material-ui

.PHONY: update-backstage-latest
update-backstage-latest:
	git submodule update --remote
	if [ ! -d "node_modules" ]; then npm install; fi
	npm install --save-dev --force @backstage/core-plugin-api @backstage/test-utils @backstage/plugin-search-react @backstage/theme @backstage/plugin-catalog-react @backstage/plugin-home-react @backstage/plugin-azure-devops-common @backstage/plugin-home @backstage/plugin-search @backstage/plugin-microsoft-calendar @backstage/plugin-stack-overflow @backstage/plugin-gcalendar @material-ui/lab material-ui-popup-state @react-hookz/web @material-table/core humanize-duration @rjsf/material-ui
