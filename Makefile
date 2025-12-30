.PHONY: smoke

smoke:
	@mkdir -p artifacts
	@echo "TODO: implement offline smoke" | tee artifacts/smoke.txt
	@test -s artifacts/smoke.txt
