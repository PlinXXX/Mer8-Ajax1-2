module TasksHelper
	def status
		return @task.status ? "Done" : "Not yet finished"
	end
end
